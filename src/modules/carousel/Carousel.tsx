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
   //color
   arrowColor?: string;

   width: string;
   visibleSlides: ISizes;

   children: React.ReactNode | React.ReactNode[];
   data: any[];
}


const CarouselComponent: React.FC<ICarouselProps> = (props) => {
   const { arrowColor = 'black', cellSpacing, width, visibleSlides, children, data } = props;

   const classes = useStyles();

   const _width = width === 'md' ? 'sm' : width === 'xl' ? 'lg' : width;
   const _visibleSlides = visibleSlides[_width as keyof typeof visibleSlides];

   return (
      <div className={classes.sliderContainer}>
         <CarouselProvider
            dragging={true}
            enableKeyboardControls={true}
            renderBottomCenterControls={() => ''}
            framePadding={'0 46px'}
            disableEdgeSwiping={true}
            cellSpacing={cellSpacing}
            renderCenterLeftControls={({ previousSlide, currentSlide }) => {
               if (_visibleSlides >= data?.length || currentSlide === 0) return <div />;
               return (
                  <button
                     arial-label="previous topic"
                     className={classes.arrowContainer}
                     onClick={previousSlide}>
                     <ArrowBackIosIcon style={{ color: arrowColor }} />
                  </button>
               );
            }}
            renderCenterRightControls={({ nextSlide, currentSlide }) => {
               if (_visibleSlides >= data.length || currentSlide === data.length - _visibleSlides) {
                  return <div />;
               }

               return (
                  <button
                     aria-label="next topic"
                     className={classes.arrowContainer}
                     onClick={nextSlide}>
                     <ArrowForwardIosIcon style={{ color: arrowColor }} />
                  </button>
               );
            }}
            autoplay={true}
            slidesToScroll={1}
            cellAlign={'left'}
            slidesToShow={_visibleSlides}
            >
            {children}
         </CarouselProvider>
      </div>
   );
};

export const Carousel = withStylesInjectedFirst(withWidth()(CarouselComponent));
