import React from 'react';

import { CarouselSlideRenderControlProps } from 'nuka-carousel';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import useStyles from './carouselCenterRightControls.jss';

export const CarouselCenterRightControls: React.FC<CarouselSlideRenderControlProps> = (props) => {
   const { nextSlide, currentSlide, slideCount, slidesToShow } = props;

   const classes = useStyles();

   if (slidesToShow >= slideCount || currentSlide === slideCount - slidesToShow) {
      return null;
   }

   return (
      <button aria-label="Next topic" className={classes.arrowContainer} onClick={nextSlide}>
         <ArrowForwardIosIcon style={{ color: 'black' }} />
      </button>
   );
};
