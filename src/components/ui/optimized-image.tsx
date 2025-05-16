import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'eager' | 'lazy';
  priority?: boolean;
  blurEffect?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
}

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  priority = false,
  blurEffect = true,
  objectFit = 'cover',
  rounded = 'none',
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Determine if image has already been cached
  useEffect(() => {
    const img = new Image();
    img.src = src;
    
    if (img.complete) {
      setIsLoaded(true);
    }
  }, [src]);

  // Handle image load success
  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  // Handle image load error
  const handleImageError = () => {
    setImageError(true);
  };

  // Determine rounded corner classes
  const roundedClass = {
    'none': '',
    'sm': 'rounded-sm',
    'md': 'rounded-md',
    'lg': 'rounded-lg',
    'full': 'rounded-full',
  }[rounded];

  // Determine object fit classes
  const objectFitClass = {
    'cover': 'object-cover',
    'contain': 'object-contain',
    'fill': 'object-fill',
    'none': 'object-none',
    'scale-down': 'object-scale-down',
  }[objectFit];

  // Determine priority attributes
  const priorityProps = priority ? {
    fetchPriority: 'high' as const,
    loading: 'eager' as const,
  } : {
    loading: loading as 'eager' | 'lazy',
  };

  return (
    <div className={`relative overflow-hidden ${roundedClass} ${className}`} style={{ width, height }}>
      {/* Show shimmer/placeholder while loading */}
      {!isLoaded && blurEffect && (
        <div className="absolute inset-0 bg-slate-200 dark:bg-slate-700 animate-pulse" />
      )}

      {/* Fallback for error */}
      {imageError ? (
        <div className="w-full h-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500">
          <span className="text-sm">Image not available</span>
        </div>
      ) : (
        <motion.img
          src={src}
          alt={alt}
          width={width}
          height={height}
          onLoad={handleImageLoad}
          onError={handleImageError}
          className={`w-full h-full ${objectFitClass}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          {...priorityProps}
        />
      )}
    </div>
  );
};

export default OptimizedImage; 