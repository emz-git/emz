import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Form validation schema
export const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z
    .string()
    .email("Invalid email address")
    .max(254, "Email is too long"),
  company: z.string().optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long"),
});

export type FormValues = z.infer<typeof formSchema>;

// Error handling
export class AppError extends Error {
  constructor(
    message: string,
    public code: string = "UNKNOWN_ERROR",
  ) {
    super(message);
    this.name = "AppError";
  }
}

// Loading states
export enum LoadingState {
  IDLE = "idle",
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

// Type guards
export function isClient(): boolean {
  return typeof window !== "undefined";
}

// URL utilities
export function getBaseUrl(): string {
  return process.env.NEXT_PUBLIC_BASE_URL || window.location.origin;
}

// Date formatting
export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Slug generation
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Image optimization
export function optimizeImage(src: string, width: number): string {
  return `${src}?w=${width}&q=80`;
}

// Error handling middleware
export function withErrorHandling<T extends (...args: any[]) => any>(
  fn: T,
): (...args: Parameters<T>) => ReturnType<T> {
  return (...args) => {
    try {
      return fn(...args);
    } catch (error) {
      console.error("Error in", fn.name, ":", error);
      throw error;
    }
  };
}

// Debounce utility
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle utility
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number,
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Scroll utilities
export function scrollToElement(
  element: HTMLElement,
  options: ScrollIntoViewOptions = { behavior: "smooth" },
) {
  element.scrollIntoView(options);
}

// Accessibility utilities
export function focusElement(element: HTMLElement) {
  element.focus({ preventScroll: true });
}

// Form validation
export function validateForm(data: unknown): FormValues {
  return formSchema.parse(data);
}

// Image loading
export function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

// DOM utilities
export function getScrollPosition(): { x: number; y: number } {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset,
  };
}
