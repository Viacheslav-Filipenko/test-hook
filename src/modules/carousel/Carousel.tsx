import React from 'react';

import CarouselProvider, { CarouselProps } from 'nuka-carousel';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import useStyles from './carousel.jss';

export interface ICarouselProps extends CarouselProps {
   children?: React.ReactNode;
   color?: string;
}

export const Carousel: React.FC<ICarouselProps> = (props) => {
   const { color, children } = props;

   const classes = useStyles();

   return (
      <div className={classes.sliderContainer}>
         <CarouselProvider
            autoplay={true}
            dragging={true}
            enableKeyboardControls={true}
            disableEdgeSwiping={true}
            slidesToScroll={1}
            slidesToShow={1}
            framePadding="0 46px"
            cellAlign="left"
            renderBottomCenterControls={() => null}
            renderCenterLeftControls={(props) => {
               const { previousSlide, currentSlide, slideCount, slidesToShow } = props;

               if (slidesToShow >= slideCount || !currentSlide) {
                  return null;
               }

               return (
                  <button
                     arial-label="Previous topic"
                     className={classes.arrowContainer}
                     onClick={previousSlide}>
                     <ArrowBackIosIcon style={{ color: color || 'black' }} />
                  </button>
               );
            }}
            renderCenterRightControls={(props) => {
               const { nextSlide, currentSlide, slideCount, slidesToShow } = props;

               if (slidesToShow >= slideCount || currentSlide === slideCount - slidesToShow) {
                  return null;
               }

               return (
                  <button
                     aria-label="Next topic"
                     className={classes.arrowContainer}
                     onClick={nextSlide}>
                     <ArrowForwardIosIcon style={{ color: color || 'black' }} />
                  </button>
               );
            }}
            {...props}>
            {children}
         </CarouselProvider>
      </div>
   );
};
