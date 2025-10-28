/**
 * Simple in-memory rate limiter for contact form submissions
 * For production, consider upgrading to Redis-based rate limiting
 */

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

// In-memory store for rate limiting
// Note: This will reset on server restart. For production, use Redis.
const rateLimitStore = new Map<string, RateLimitEntry>();

// Configuration
const RATE_LIMIT_CONFIG = {
  windowMs: 60 * 60 * 1000, // 1 hour
  maxRequests: 2, // max 2 submissions per hour per IP
  message: "Too many contact form submissions. Please try again later.",
};

/**
 * Clean up expired entries from the rate limit store
 */
function cleanupExpiredEntries() {
  const now = Date.now();
  for (const [key, entry] of rateLimitStore.entries()) {
    if (now > entry.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}

/**
 * Check if a request should be rate limited
 * @param identifier - Usually IP address, but can be any unique identifier
 * @returns Object with isAllowed and remaining attempts info
 */
export function checkRateLimit(identifier: string) {
  cleanupExpiredEntries();

  const now = Date.now();
  const entry = rateLimitStore.get(identifier);

  if (!entry) {
    // First request from this identifier
    rateLimitStore.set(identifier, {
      count: 1,
      resetTime: now + RATE_LIMIT_CONFIG.windowMs,
    });

    return {
      isAllowed: true,
      remaining: RATE_LIMIT_CONFIG.maxRequests - 1,
      resetTime: now + RATE_LIMIT_CONFIG.windowMs,
      message: null,
    };
  }

  if (now > entry.resetTime) {
    // Window has expired, reset counter
    rateLimitStore.set(identifier, {
      count: 1,
      resetTime: now + RATE_LIMIT_CONFIG.windowMs,
    });

    return {
      isAllowed: true,
      remaining: RATE_LIMIT_CONFIG.maxRequests - 1,
      resetTime: now + RATE_LIMIT_CONFIG.windowMs,
      message: null,
    };
  }

  if (entry.count >= RATE_LIMIT_CONFIG.maxRequests) {
    // Rate limit exceeded
    return {
      isAllowed: false,
      remaining: 0,
      resetTime: entry.resetTime,
      message: RATE_LIMIT_CONFIG.message,
    };
  }

  // Increment counter
  entry.count += 1;
  rateLimitStore.set(identifier, entry);

  return {
    isAllowed: true,
    remaining: RATE_LIMIT_CONFIG.maxRequests - entry.count,
    resetTime: entry.resetTime,
    message: null,
  };
}

/**
 * Get the client IP address from various headers
 * Handles proxies, load balancers, and CDNs
 */
export function getClientIP(headers: Headers): string {
  // Check various headers that might contain the real IP
  const possibleIpHeaders = [
    "x-forwarded-for",
    "x-real-ip",
    "x-client-ip",
    "cf-connecting-ip", // Cloudflare
    "true-client-ip", // Cloudflare Enterprise
    "x-forwarded",
    "x-cluster-client-ip",
    "forwarded-for",
    "forwarded",
  ];

  for (const header of possibleIpHeaders) {
    const value = headers.get(header);
    if (value) {
      // x-forwarded-for can contain multiple IPs, take the first one
      const ip = value.split(",")[0].trim();
      if (ip && ip !== "unknown") {
        return ip;
      }
    }
  }

  // Fallback to a default if no IP found
  return "unknown";
}

/**
 * Extract metadata from request headers for enhanced webhook payload
 */
export function extractRequestMetadata(headers: Headers) {
  const userAgent = headers.get("user-agent") || "unknown";
  const referer = headers.get("referer") || "";
  const acceptLanguage = headers.get("accept-language") || "";
  const acceptEncoding = headers.get("accept-encoding") || "";
  const connection = headers.get("connection") || "";
  const host = headers.get("host") || "";
  const xForwardedProto = headers.get("x-forwarded-proto") || "";
  const xForwardedHost = headers.get("x-forwarded-host") || "";

  return {
    userAgent,
    referer,
    acceptLanguage,
    acceptEncoding,
    connection,
    host,
    xForwardedProto,
    xForwardedHost,
    timestamp: new Date().toISOString(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
}
