
import React from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  priority?: boolean;
}

/**
 * A Next.js-like Image component for use in standard React environments.
 * Handles the ImgBB direct link resolution and provides basic optimization attributes.
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
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      referrerPolicy="no-referrer"
      {...props}
      style={{
        ...props.style,
        display: 'block',
        maxWidth: '100%',
        height: height ? height : 'auto',
      }}
    />
  );
};

export default Image;
