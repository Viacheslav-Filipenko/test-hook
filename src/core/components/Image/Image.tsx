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

export const Image: React.FC<IImageProps> = (props) => {
   const { alt, fallback, height, width, caption, onClick, src } = props;

   const [isError, setIsError] = useState(false);

   const fallbackImage = fallback ?? <FallbackImage label={alt || ''} text={caption || ''} />;

   const _img = isError ? (
      fallbackImage
   ) : (
      <LazyLoadImage
         onError={() => {
            setIsError(true);
         }}
         alt={alt}
         height={height}
         src={src}
         width={width}
      />
   );

   return (
      <div style={{ cursor: !onClick ? 'default' : 'pointer' }} onClick={onClick}>
         {_img}
         <span>{caption}</span>
      </div>
   );
};
