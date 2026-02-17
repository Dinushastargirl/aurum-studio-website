import React from 'react';
import NextImage from 'next/image';

interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'width' | 'height' | 'src'> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

/**
 * High-performance Image component utilizing Next.js built-in optimization.
 * Correctly handles ImgBB URLs with domain-level optimization.
 */
const Image: React.FC<ImageProps> = ({ 
  src, 
  alt, 
  width, 
  height, 
  className, 
  priority,
  ...props 
}) => {
  // Use 'fill' if dimensions are omitted to ensure responsive coverage
  if (!width || !height) {
    return (
      <div className={`relative w-full h-full overflow-hidden ${className}`}>
        <NextImage
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    );
  }

  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
};

export default Image;