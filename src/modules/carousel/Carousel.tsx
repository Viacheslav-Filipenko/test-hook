import React from 'react';

import CarouselProvider, { CarouselProps, CarouselRenderControl } from 'nuka-carousel';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { IconButton } from '@material-ui/core';

import withWidth from '@material-ui/core/withWidth';

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
   nextButtonAriaLabel?: string;
   previousButtonAriaLabel?: string;
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
      nextButtonAriaLabel = 'next',
      previousButtonAriaLabel = 'previous',
      cellAlign = 'left',
      slidesToScroll = 1,
      framePadding = '0 46px',
      renderBottomCenterControls = null
   } = props;

   const classes = useStyles();

   const _width = width === 'md' ? 'sm' : width === 'xl' ? 'lg' : width;
   const slidesToShow = visibleSlides[_width as keyof typeof visibleSlides];

   const CenterLeftControls: CarouselRenderControl = (props) => {
      const { previousSlide, slideCount, currentSlide } = props;

      const isDisabled = slidesToShow >= slideCount || !currentSlide;

      return (
         <IconButton
            disabled={isDisabled}
            arial-label={previousButtonAriaLabel}
            className={classes.arrowContainer}
            onClick={previousSlide}
            style={{ color: isDisabled ? 'rgba(0, 0, 0, 0.54)' : color }}>
            <ArrowBackIosIcon />
         </IconButton>
      );
   };

   const CenterRightControls: CarouselRenderControl = (props) => {
      const { nextSlide, slideCount, currentSlide } = props;

      const isDisabled = slidesToShow >= slideCount || currentSlide === slideCount - slidesToShow;

      return (
         <IconButton
            disabled={isDisabled}
            aria-label={nextButtonAriaLabel}
            className={classes.arrowContainer}
            onClick={nextSlide}
            style={{ color: isDisabled ? 'rgba(0, 0, 0, 0.54)' : color }}>
            <ArrowForwardIosIcon />
         </IconButton>
      );
   };

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
            renderCenterLeftControls={CenterLeftControls}
            renderCenterRightControls={CenterRightControls}>
            {children}
         </CarouselProvider>
      </div>
   );
};

export const Carousel = withWidth()(CarouselComponent);
