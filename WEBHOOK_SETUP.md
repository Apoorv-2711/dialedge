# Enhanced Contact Form with Rate Limiting & Metadata

## Features Implemented

### 1. Rate Limiting

- **Limit**: 3 submissions per 15 minutes per IP address
- **Storage**: In-memory (resets on server restart)
- **Production**: Consider upgrading to Redis for persistent rate limiting

### 2. Google reCAPTCHA v2

- **Integration**: Complete with dark/light theme support
- **Theme Detection**: Automatically adapts to user's theme preference
- **Server Verification**: Full server-side validation implemented
- **Error Handling**: User-friendly error messages and recovery

### 3. Enhanced Webhook Payload

The webhook now includes comprehensive metadata:

```json
{
  "name": "John Doe",
  "email": "john@company.com",
  "phone": "+1234567890",
  "company": "Acme Inc.",
  "metadata": {
    "clientIP": "192.168.1.100",
    "userAgent": "Mozilla/5.0...",
    "referer": "https://example.com/contact",
    "acceptLanguage": "en-US,en;q=0.9",
    "acceptEncoding": "gzip, deflate, br",
    "connection": "keep-alive",
    "host": "yourdomain.com",
    "xForwardedProto": "https",
    "xForwardedHost": "yourdomain.com",
    "timestamp": "2025-09-19T10:30:00.000Z",
    "timezone": "America/New_York",
    "rateLimitInfo": {
      "remaining": 2,
      "resetTime": 1695117900000
    }
  },
  "cookies": {
    "session_id": "abc123",
    "theme": "dark",
    "_ga": "GA1.2.123456789.0123456789"
  },
  "submissionTime": "2025-09-19T10:30:00.000Z"
}
```

## Environment Variables

### Required for Enhanced Features

- `WEBHOOK_URL`: Your webhook endpoint URL
- `WEBHOOK_API_KEY`: API key for webhook authentication

### Required for reCAPTCHA

- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`: Your reCAPTCHA v2 site key (public)
- `RECAPTCHA_SECRET_KEY`: Your reCAPTCHA v2 secret key (server-side)

**Setup Instructions:**

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Create a new site with reCAPTCHA v2 ("I'm not a robot" Checkbox)
3. Add your domain(s) to the site configuration
4. Copy the Site Key to `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
5. Copy the Secret Key to `RECAPTCHA_SECRET_KEY`

### Enhanced Headers

The webhook request now includes additional headers:

- `x-client-ip`: Client's IP address
- `x-user-agent`: User's browser information
- `x-make-apikey`: Your webhook API key

## Rate Limiting Configuration

Current settings in `lib/rate-limiter.ts`:

```typescript
const RATE_LIMIT_CONFIG = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 3, // max 3 submissions per 15 minutes per IP
  message: "Too many contact form submissions. Please try again later.",
};
```

## Testing

1. **Rate Limiter Test**:

   ```bash
   # Run the test script
   npx tsx lib/test-rate-limiter.ts
   ```

2. **Contact Form Testing**:
   - Submit 3 forms quickly from the same IP
   - 4th submission should be blocked with rate limit message
   - Wait 15 minutes or restart server to reset

## Production Considerations

### 1. Redis Integration (Recommended)

For production environments, replace the in-memory store with Redis:

```typescript
import Redis from "ioredis";
const redis = new Redis(process.env.REDIS_URL);

// Replace Map operations with Redis operations
await redis.setex(identifier, ttlSeconds, JSON.stringify(entry));
```

### 2. IP Address Detection

The system checks multiple headers for real IP:

- `x-forwarded-for` (most common)
- `x-real-ip`
- `cf-connecting-ip` (Cloudflare)
- `true-client-ip` (Cloudflare Enterprise)
- And more...

### 3. Security Headers

Consider adding these headers to your webhook requests:

- `x-webhook-signature`: HMAC signature for payload verification
- `x-timestamp`: Request timestamp for replay attack prevention

### 4. Monitoring

Monitor these metrics:

- Rate limit violations per IP
- Webhook response times and errors
- Form submission patterns

## Troubleshooting

### Rate Limiting Not Working

1. Check server logs for rate limit messages
2. Verify IP detection is working correctly
3. Consider proxy/CDN configuration affecting IP detection

### Webhook Issues

1. Verify `WEBHOOK_URL` environment variable
2. Check webhook endpoint can accept large payloads
3. Monitor webhook response status codes in logs

### Missing Metadata

1. Ensure proper proxy configuration passes real IP headers
2. Check browser security settings for cookie access
3. Verify Next.js headers() function is working correctly

### reCAPTCHA Issues

1. **reCAPTCHA not loading**: Check `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` environment variable
2. **Verification failing**: Verify `RECAPTCHA_SECRET_KEY` is correctly set on server
3. **Theme not switching**: Component automatically detects theme changes, check browser console for errors
4. **Domain errors**: Ensure your domain is added to reCAPTCHA site configuration

## reCAPTCHA Features

### Automatic Theme Detection

- **Light Theme**: Clean, minimal design
- **Dark Theme**: Matches dark mode automatically
- **System Theme**: Follows browser/OS preference
- **Dynamic Switching**: Updates immediately when theme changes

### Error Handling

- **Network Errors**: Graceful fallback with user-friendly messages
- **Verification Failures**: Clear instructions for users to retry
- **Missing Configuration**: Development warning when keys not set
- **Rate Limiting**: Works alongside existing rate limiting system

### Accessibility

- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Proper ARIA labels and announcements
- **High Contrast**: Maintains readability in all themes
- **Mobile Responsive**: Optimized for mobile devices
