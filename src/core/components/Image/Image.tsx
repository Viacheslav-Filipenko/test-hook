import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { FallbackImage } from '../FallbackImage/FallbackImage';

export interface IImageProps {
   alt?: string;
   height?: number | string;
   width?: number | string;
   src: string;
   caption?: string;
   fallback?: React.ReactNode;
   onClick?: () => void;
}

const defaultImageProps = {
   fallback: FallbackImage
};

export const Image: React.FC<IImageProps> = (props) => {
   const { alt, fallback, height, width, caption, onClick, src } = {
      ...defaultImageProps,
      ...props
   };

   const [hasError, setHasError] = useState(false);

   const componentToRender = hasError ? (
      fallback
   ) : (
      <LazyLoadImage
         onError={() => setHasError(true)}
         alt={alt}
         height={height}
         src={src}
         width={width}
      />
   );

   return (
      <div
         style={{
            cursor: !onClick ? 'default' : 'pointer'
         }}
         onClick={onClick}>
         {componentToRender}
         <span>{caption}</span>
      </div>
   );
};
