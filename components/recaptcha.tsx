"use client";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useTheme } from "@/components/theme-provider";

interface RecaptchaProps {
  onVerify: (token: string | null) => void;
  onExpired?: () => void;
  onError?: () => void;
  className?: string;
}

export interface RecaptchaRef {
  reset: () => void;
  execute: () => void;
}

const Recaptcha = forwardRef<RecaptchaRef, RecaptchaProps>(
  ({ onVerify, onExpired, onError, className }, ref) => {
    const { theme } = useTheme();
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">(
      "light"
    );

    // Resolve the actual theme (handle "system" theme)
    useEffect(() => {
      const getResolvedTheme = () => {
        if (theme === "system") {
          return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
        }
        return theme as "light" | "dark";
      };

      setResolvedTheme(getResolvedTheme());

      // Listen for system theme changes when using "system" theme
      if (theme === "system") {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = () => {
          setResolvedTheme(mediaQuery.matches ? "dark" : "light");
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
      }
    }, [theme]);

    // Expose methods to parent component
    useImperativeHandle(ref, () => ({
      reset: () => {
        recaptchaRef.current?.reset();
      },
      execute: () => {
        recaptchaRef.current?.execute();
      },
    }));

    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    if (!siteKey) {
      return (
        <div className="p-4 border border-red-200 rounded-md bg-red-50 dark:bg-red-950 dark:border-red-800">
          <p className="text-sm text-red-600 dark:text-red-400">
            ⚠️ reCAPTCHA site key not configured. Please set
            NEXT_PUBLIC_RECAPTCHA_SITE_KEY environment variable.
          </p>
        </div>
      );
    }

    return (
      <div className={className}>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={siteKey}
          theme={resolvedTheme}
          onChange={onVerify}
          onExpired={onExpired}
          onError={onError}
          size="normal"
        />
      </div>
    );
  }
);

Recaptcha.displayName = "Recaptcha";

export default Recaptcha;
