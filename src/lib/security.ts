/**
 * Security utilities and implementations
 * Enhances application security through CSP, CSRF protection, and other security measures
 */

/**
 * CSRF Token management
 */
export class CSRFProtection {
  private static readonly CSRF_TOKEN_KEY = "csrf_token";
  private static readonly TOKEN_HEADER = "X-CSRF-Token";

  /**
   * Generate a new CSRF token
   * @returns A new random CSRF token
   */
  static generateToken(): string {
    const randomBytes = new Uint8Array(32);
    crypto.getRandomValues(randomBytes);
    return Array.from(randomBytes)
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  }

  /**
   * Store the CSRF token in storage
   * @param token The token to store
   */
  static storeToken(token: string): void {
    if (typeof window === "undefined") return;
    localStorage.setItem(this.CSRF_TOKEN_KEY, token);
  }

  /**
   * Get the stored CSRF token
   * @returns The stored token, or null if not found
   */
  static getToken(): string | null {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(this.CSRF_TOKEN_KEY);
  }

  /**
   * Get headers with CSRF token for fetch requests
   * @returns Headers object with CSRF token
   */
  static getHeaders(): Record<string, string> {
    const token = this.getToken();
    return token ? { [this.TOKEN_HEADER]: token } : {};
  }

  /**
   * Initialize CSRF protection by generating and storing a token
   */
  static initialize(): void {
    if (typeof window === "undefined") return;

    // Only generate a new token if one doesn't exist
    if (!this.getToken()) {
      const token = this.generateToken();
      this.storeToken(token);
    }
  }
}

/**
 * Content Security Policy (CSP) configuration
 */
export const ContentSecurityPolicy = {
  /**
   * Generate CSP header value for the application
   * @param nonce A unique nonce for inline scripts (if applicable)
   * @returns CSP header value
   */
  generatePolicy(nonce?: string): string {
    // Define default sources
    const defaultSrc = ["'self'"];

    // Define script sources
    const scriptSrc = [
      "'self'",
      // Add nonce if provided
      ...(nonce ? [`'nonce-${nonce}'`] : []),
      // Trusted third-party scripts
      "https://www.googletagmanager.com",
      "https://www.google-analytics.com",
    ];

    // Define style sources
    const styleSrc = [
      "'self'",
      "'unsafe-inline'", // Inline styles are often needed for component libraries
      "https://fonts.googleapis.com",
    ];

    // Define font sources
    const fontSrc = ["'self'", "https://fonts.gstatic.com"];

    // Define image sources
    const imgSrc = [
      "'self'",
      "data:",
      "blob:",
      "https://www.google-analytics.com",
      "https://*.cloudfront.net",
    ];

    // Define connect sources
    const connectSrc = [
      "'self'",
      "https://www.google-analytics.com",
      "https://*.algolia.net",
      "https://*.algolianet.com",
    ];

    // Build the CSP string
    return [
      `default-src ${defaultSrc.join(" ")}`,
      `script-src ${scriptSrc.join(" ")}`,
      `style-src ${styleSrc.join(" ")}`,
      `font-src ${fontSrc.join(" ")}`,
      `img-src ${imgSrc.join(" ")}`,
      `connect-src ${connectSrc.join(" ")}`,
      "object-src 'none'",
      "frame-ancestors 'self'",
      "form-action 'self'",
      "base-uri 'self'",
      "upgrade-insecure-requests",
    ].join("; ");
  },
};

/**
 * Security headers configuration for the application
 */
export const SecurityHeaders = {
  /**
   * Get all recommended security headers
   * @param nonce A unique nonce for CSP
   * @returns Object with security headers
   */
  getHeaders(nonce?: string): Record<string, string> {
    return {
      // Content-Security-Policy
      "Content-Security-Policy": ContentSecurityPolicy.generatePolicy(nonce),

      // Prevent MIME type sniffing
      "X-Content-Type-Options": "nosniff",

      // Prevent clickjacking
      "X-Frame-Options": "SAMEORIGIN",

      // Enable XSS protection in browsers
      "X-XSS-Protection": "1; mode=block",

      // Enforce HTTPS
      "Strict-Transport-Security":
        "max-age=31536000; includeSubDomains; preload",

      // Restrict browser features
      "Permissions-Policy":
        "camera=(), microphone=(), geolocation=(self), interest-cohort=()",

      // Control referrer information
      "Referrer-Policy": "strict-origin-when-cross-origin",
    };
  },
};

/**
 * Rate limiting implementation
 */
export class RateLimiter {
  private static readonly RATE_LIMIT_PREFIX = "rate_limit_";
  private static readonly DEFAULT_WINDOW = 60000; // 1 minute in milliseconds
  private static readonly DEFAULT_MAX_REQUESTS = 10;

  /**
   * Check if a request should be rate limited
   * @param key Unique identifier for the request type
   * @param maxRequests Maximum number of requests allowed in the window
   * @param windowMs Time window in milliseconds
   * @returns True if the request should be allowed, false if it should be rate limited
   */
  static checkRateLimit(
    key: string,
    maxRequests: number = this.DEFAULT_MAX_REQUESTS,
    windowMs: number = this.DEFAULT_WINDOW,
  ): boolean {
    if (typeof window === "undefined") return true;

    const storageKey = `${this.RATE_LIMIT_PREFIX}${key}`;
    const now = Date.now();

    // Get existing rate limit data
    const storedData = localStorage.getItem(storageKey);
    let requests: { timestamp: number }[] = [];

    if (storedData) {
      try {
        requests = JSON.parse(storedData);
      } catch (e) {
        // Reset if data is corrupted
        requests = [];
      }
    }

    // Filter out expired timestamps
    requests = requests.filter((req) => now - req.timestamp < windowMs);

    // Check if rate limit exceeded
    if (requests.length >= maxRequests) {
      return false;
    }

    // Add current request and store
    requests.push({ timestamp: now });
    localStorage.setItem(storageKey, JSON.stringify(requests));

    return true;
  }
}

/**
 * Initialize all security features
 */
export function initializeSecurity(): void {
  if (typeof window === "undefined") return;

  // Initialize CSRF protection
  CSRFProtection.initialize();

  // Set up global fetch interceptor for CSRF tokens
  const originalFetch = window.fetch;
  window.fetch = function (input: RequestInfo | URL, init?: RequestInit) {
    const csrfHeaders = CSRFProtection.getHeaders();

    // Merge CSRF headers with existing headers
    const mergedInit = {
      ...init,
      headers: {
        ...(init?.headers || {}),
        ...csrfHeaders,
      },
    };

    return originalFetch.call(window, input, mergedInit);
  };
}

/**
 * Sanitize user input to prevent XSS attacks
 * @param input User input string
 * @returns Sanitized string
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
