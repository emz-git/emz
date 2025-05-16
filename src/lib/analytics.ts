/**
 * Analytics and performance monitoring utilities
 * Tracks Core Web Vitals and user interactions
 */

import { getCLS, getFID, getLCP, getFCP, getTTFB } from "web-vitals";

/**
 * Core Web Vitals metric names
 */
export type MetricName = "CLS" | "FID" | "LCP" | "TTFB" | "FCP";

/**
 * Metric data structure
 */
export interface MetricData {
  name: MetricName;
  value: number;
  id: string;
  delta: number;
  entries: PerformanceEntry[];
}

/**
 * Initialize web vitals reporting
 * @param onPerfEntry Callback function to handle metric data
 */
export function reportWebVitals(
  onPerfEntry?: (metric: MetricData) => void,
): void {
  if (onPerfEntry && typeof onPerfEntry === "function") {
    // Core Web Vitals
    getCLS(onPerfEntry);
    getFID(onPerfEntry);
    getLCP(onPerfEntry);
    getFCP(onPerfEntry);
    getTTFB(onPerfEntry);
  }
}

/**
 * Send metrics to analytics providers
 * @param metric Metric data to send
 */
export function sendToAnalytics(metric: MetricData): void {
  // Log to console in development
  if (process.env.NODE_ENV === "development") {
    console.log(`Web Vitals: ${metric.name} - ${metric.value}`);
  }

  // Google Analytics 4 - uncomment when GA4 is configured
  /*
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'web_vitals', {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      metric_id: metric.id,
      metric_name: metric.name,
      metric_value: metric.value,
    });
  }
  */

  // You can send to other analytics providers here (e.g., Plausible, Mixpanel)
}

/**
 * Track custom events
 * @param eventName Name of the event
 * @param eventParams Additional parameters for the event
 */
export function trackEvent(
  eventName: string,
  eventParams: Record<string, any> = {},
): void {
  // Console logging in development
  if (process.env.NODE_ENV === "development") {
    console.log(`Event: ${eventName}`, eventParams);
  }

  // Send to Google Analytics 4
  /*
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
  }
  */

  // You can add additional tracking providers here
}

/**
 * Initialize all analytics providers
 */
export function initializeAnalytics(): void {
  // Initialize Web Vitals
  reportWebVitals(sendToAnalytics);

  // Set up custom error tracking
  if (typeof window !== "undefined") {
    window.addEventListener("error", (event) => {
      trackEvent("js_error", {
        error_message: event.message,
        error_source: event.filename,
        error_line: event.lineno,
        error_column: event.colno,
      });
    });

    // Track unhandled promise rejections
    window.addEventListener("unhandledrejection", (event) => {
      trackEvent("unhandled_promise_rejection", {
        error_message: event.reason?.message || "Unknown promise rejection",
      });
    });
  }
}

/**
 * User timing API wrapper for performance measurements
 */
export class PerformanceTimer {
  private readonly markName: string;

  constructor(markName: string) {
    this.markName = markName;
    this.start();
  }

  /**
   * Start the timer
   */
  start(): void {
    if (typeof performance !== "undefined") {
      performance.mark(`${this.markName}_start`);
    }
  }

  /**
   * End the timer and report the duration
   */
  end(): number | undefined {
    if (typeof performance === "undefined") {
      return undefined;
    }

    performance.mark(`${this.markName}_end`);

    try {
      const measure = performance.measure(
        this.markName,
        `${this.markName}_start`,
        `${this.markName}_end`,
      );

      const duration = measure.duration;

      // Report the timing data
      trackEvent("performance_measure", {
        name: this.markName,
        duration,
      });

      return duration;
    } catch (e) {
      console.error("Performance measurement error:", e);
      return undefined;
    }
  }
}
