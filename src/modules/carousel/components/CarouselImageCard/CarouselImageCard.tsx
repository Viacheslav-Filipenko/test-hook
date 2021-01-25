import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import useStyles from './carouselImageCard.jss';

import { Image } from '../../../../core/components/Image/Image';

export interface ICarouselImageCardProps {
   img: string;
   caption?: string;
   link?: string | undefined;
   maxWidth?: number;
   maxHeight?: number;
}

const defaultCarouselImageCardProps: ICarouselImageCardProps = {
   img: '',
   caption: '',
   link: '',
   maxWidth: 200,
   maxHeight: 200
};

export const CarouselImageCard: React.FC<ICarouselImageCardProps> = (props) => {
   const { img, caption, link, maxWidth, maxHeight } = {
      ...defaultCarouselImageCardProps,
      ...props
   };

   const classes = useStyles();

   return (
      <Link href={link} className={classes.container}>
         <div style={{ height: maxHeight, maxWidth: maxWidth }} className={classes.imageContainer}>
            <Image alt="" caption={caption} width="auto" height="auto" src={img} />
         </div>
         <Typography style={{ maxWidth: maxWidth }} className={classes.caption} variant="caption">
            {caption}
         </Typography>
      </Link>
   );
};
