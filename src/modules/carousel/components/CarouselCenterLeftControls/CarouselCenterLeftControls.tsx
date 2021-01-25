import React from 'react';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { CarouselSlideRenderControlProps } from 'nuka-carousel';

import useStyles from './carouselCenterLeftControls.jss';

export const CarouselCenterLeftControls: React.FC<CarouselSlideRenderControlProps> = (props) => {
   const { previousSlide, currentSlide, slideCount, slidesToShow } = props;

   const classes = useStyles();

   if (slidesToShow >= slideCount || !currentSlide) {
      return null;
   }

   return (
      <button
         arial-label="Previous topic"
         className={classes.arrowContainer}
         onClick={previousSlide}>
         <ArrowBackIosIcon style={{ color: 'black' }} />
      </button>
   );
};
