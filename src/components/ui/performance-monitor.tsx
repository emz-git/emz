import { useEffect } from 'react';
import { getCLS, getFID, getLCP, getFCP, getTTFB } from 'web-vitals';

// Function to report metrics
const reportWebVitals = (onPerfEntry: (metric: any) => void) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    getCLS(onPerfEntry); // Cumulative Layout Shift
    getFID(onPerfEntry); // First Input Delay
    getLCP(onPerfEntry); // Largest Contentful Paint
    getFCP(onPerfEntry); // First Contentful Paint
    getTTFB(onPerfEntry); // Time to First Byte
  }
};

interface PerformanceMonitorProps {
  // If true, report vitals to Google Analytics
  sendToAnalytics?: boolean;
  // If true, report vitals to console
  debug?: boolean;
}

const PerformanceMonitor = ({ 
  sendToAnalytics = false, 
  debug = false 
}: PerformanceMonitorProps) => {
  useEffect(() => {
    // Report vitals
    reportWebVitals((metric) => {
      // Log to console if in debug mode
      if (debug) {
        console.log(metric.name, metric.value);
      }

      // Send to Google Analytics if enabled
      if (sendToAnalytics && (window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: metric.name,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }
    });
  }, [debug, sendToAnalytics]);

  // This component doesn't render anything
  return null;
};

export default PerformanceMonitor; 