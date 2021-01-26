import React from 'react';
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

export const Image: React.FC<IImageProps> = ({
   alt,
   fallback,
   height,
   width,
   caption,
   onClick,
   src
}) => {
   const _fallback = fallback ? fallback : <FallbackImage label={alt || ''} text={caption || ''} />;
   const _img =
      src === '' ? _fallback : <LazyLoadImage alt={alt} height={height} src={src} width={width} />;

   return (
      <div style={{ cursor: !onClick ? 'default' : 'pointer' }} onClick={onClick}>
         {_img}
         <span>{caption}</span>
      </div>
   );
};
