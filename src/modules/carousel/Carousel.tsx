import React from 'react';

import CarouselProvider, { CarouselProps } from 'nuka-carousel';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import withWidth from '@material-ui/core/withWidth';
import { withStylesInjectedFirst } from '../../core/hocs/with-styles-injected-first';

import useStyles from './carousel.jss';

interface ISizes {
   xs: number;
   sm: number;
   lg: number;
}

export interface ICarouselProps extends CarouselProps {
   color?: string;
   width: string;
   visibleSlides: ISizes;
   children: React.ReactNode | React.ReactNode[];
}

const CarouselComponent: React.FC<ICarouselProps> = (props) => {
   const {
      cellSpacing,
      width,
      visibleSlides,
      children,
      getControlsContainerStyles,
      color = 'black',
      autoplay = true,
      dragging = true,
      disableEdgeSwiping = true,
      enableKeyboardControls = true,
      cellAlign = 'left',
      slidesToScroll = 1,
      framePadding = '0 46px',
      renderBottomCenterControls = null
   } = props;

   const classes = useStyles();

   const _width = width === 'md' ? 'sm' : width === 'xl' ? 'lg' : width;
   const slidesToShow = visibleSlides[_width as keyof typeof visibleSlides];

   return (
      <div className={classes.sliderContainer}>
         <CarouselProvider
            autoplay={autoplay}
            dragging={dragging}
            cellAlign={cellAlign}
            cellSpacing={cellSpacing}
            framePadding={framePadding}
            slidesToShow={slidesToShow}
            slidesToScroll={slidesToScroll}
            disableEdgeSwiping={disableEdgeSwiping}
            enableKeyboardControls={enableKeyboardControls}
            getControlsContainerStyles={getControlsContainerStyles}
            renderBottomCenterControls={renderBottomCenterControls}
            renderCenterLeftControls={({ previousSlide, slideCount, currentSlide }) => {
               if (slidesToShow >= slideCount || !currentSlide) {
                  return null;
               }

               return (
                  <button
                     arial-label="previous topic"
                     className={classes.arrowContainer}
                     onClick={previousSlide}>
                     <ArrowBackIosIcon style={{ color }} />
                  </button>
               );
            }}
            renderCenterRightControls={({ nextSlide, slideCount, currentSlide }) => {
               if (slidesToShow >= slideCount || currentSlide === slideCount - slidesToShow) {
                  return null;
               }

               return (
                  <button
                     aria-label="next topic"
                     className={classes.arrowContainer}
                     onClick={nextSlide}>
                     <ArrowForwardIosIcon style={{ color }} />
                  </button>
               );
            }}>
            {children}
         </CarouselProvider>
      </div>
   );
};

export const Carousel = withStylesInjectedFirst(withWidth()(CarouselComponent));
