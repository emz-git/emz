import React, { Suspense, lazy, ComponentType } from "react";
import { cn } from "@/lib/utils";

/**
 * Props for the LazyLoad component
 */
interface LazyLoadProps {
  /**
   * The component to lazy load
   */
  component: () => Promise<{ default: ComponentType<any> }>;

  /**
   * Props to pass to the lazy-loaded component
   */
  componentProps?: Record<string, any>;

  /**
   * Loading fallback component or element
   */
  fallback?: React.ReactNode;

  /**
   * Additional className for styling
   */
  className?: string;

  /**
   * Error boundary fallback
   */
  errorFallback?: React.ReactNode;

  /**
   * Whether to load only when the component is in viewport
   */
  loadOnlyInViewport?: boolean;
}

/**
 * LazyLoad component for code splitting to improve performance
 *
 * This component:
 * 1. Dynamically imports components only when needed
 * 2. Shows a nice loading state while components load
 * 3. Handles errors gracefully with a fallback UI
 * 4. Can delay loading until the component is in viewport
 *
 * @example
 * <LazyLoad
 *   component={() => import('./HeavyComponent')}
 *   componentProps={{ data: someData }}
 *   loadOnlyInViewport={true}
 * />
 */
export const LazyLoad: React.FC<LazyLoadProps> = ({
  component,
  componentProps = {},
  fallback = <DefaultLoadingFallback />,
  className,
  errorFallback = <DefaultErrorFallback />,
  loadOnlyInViewport = false,
}) => {
  const LazyComponent = React.useMemo(() => lazy(component), [component]);
  const [isInViewport, setIsInViewport] = React.useState(!loadOnlyInViewport);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!loadOnlyInViewport || isInViewport) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInViewport(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px", // Load 200px before it comes into view
        threshold: 0.01,
      },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [loadOnlyInViewport, isInViewport]);

  return (
    <div ref={containerRef} className={cn(className)}>
      {isInViewport && (
        <ErrorBoundary fallback={errorFallback}>
          <Suspense fallback={fallback}>
            <LazyComponent {...componentProps} />
          </Suspense>
        </ErrorBoundary>
      )}
      {!isInViewport && fallback}
    </div>
  );
};

/**
 * Default loading fallback component with a nice pulse animation
 */
const DefaultLoadingFallback: React.FC = () => (
  <div className="animate-pulse">
    <div className="rounded-md bg-muted/70 w-full h-24"></div>
  </div>
);

/**
 * Default error fallback component
 */
const DefaultErrorFallback: React.FC = () => (
  <div className="p-4 text-center text-destructive-foreground bg-destructive/10 rounded-md">
    <p>Something went wrong</p>
  </div>
);

/**
 * Simple error boundary component to catch rendering errors
 */
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error in component:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

/**
 * Creates a lazy-loaded version of a component
 * @param importFunc Import function returning the component
 * @returns A lazy-loaded component
 *
 * @example
 * const LazyHeavyComponent = createLazyComponent(() => import('./HeavyComponent'));
 */
export function createLazyComponent<T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
): React.LazyExoticComponent<T> {
  return lazy(importFunc);
}

/**
 * Function to prefetch components for smoother page transitions
 * Call this when you anticipate the user navigating to another page
 *
 * @param componentImport Import function returning the component
 *
 * @example
 * // On hover over a navigation link
 * onMouseEnter={() => prefetchComponent(() => import('./AboutPage'))}
 */
export const prefetchComponent = (
  componentImport: () => Promise<{ default: ComponentType<any> }>,
): void => {
  componentImport().catch((error) => {
    console.error("Failed to prefetch component", error);
  });
};

export default LazyLoad;
