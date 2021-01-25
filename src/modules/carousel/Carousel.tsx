import React from 'react';

import CarouselProvider, { CarouselProps } from 'nuka-carousel';

import { CarouselCenterLeftControls } from './components/CarouselCenterLeftControls/CarouselCenterLeftControls';
import { CarouselCenterRightControls } from './components/CarouselCenterRightControls/CarouselCenterRightControls';

import useStyles from './carousel.jss';

export interface ICarouselProps extends CarouselProps {
   children?: React.ReactNode;
}

export const Carousel: React.FC<ICarouselProps> = (props) => {
   const { children } = props;

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
            renderCenterLeftControls={CarouselCenterLeftControls}
            renderCenterRightControls={CarouselCenterRightControls}
            {...props}>
            {children}
         </CarouselProvider>
      </div>
   );
};
