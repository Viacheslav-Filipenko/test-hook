import React, { ReactElement } from 'react';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import useStyles from './carousel.jss';
import withWidth from '@material-ui/core/withWidth';
import CarouselProvider from 'nuka-carousel';
import {
   CollectionCard,
   ICollectionCardProps
} from '../collection/components/CollectionCard/CollectionCard';
import {
   ICarouselImageCardProps,
   CarouselImageCard
} from './components/CarouselImageCard/CarouselImageCard';

export interface CarouselProps {
   // data
   title?: string;

   //color
   arrowColor?: string;
   titleColor?: string;
   childrenColor?: string;

   // bool flags
   arrows?: boolean;
   autoplay?: boolean;

   linkTitle?: string;
   // slide params
   currenSlide?: number;
   sliderClasses?: '';
   isCardImage: boolean;
   infinite: boolean;
   width: string;
   visibleSlides: Sizes;
   cellSpacing?: number;
   data: (ICarouselImageCardProps | ICollectionCardProps)[];
}

interface Sizes {
   xs: number;
   sm: number;
   lg: number;
}
const mapSlides = (data: any[], isCard: boolean) => {
   return isCard
      ? data.map((itm, i) => <CarouselImageCard key={i} {...itm} />)
      : data.map((itm, i) => (
           <CollectionCard
              tintColor={itm.tintColor}
              onClick={() => itm.onClick()}
              count={itm.elementCount}
              title={itm.title}
              image={itm.image}
              subtitle={itm.subtitle}
              key={i}
           />
        ));
};
function CarouselComponent({
   arrowColor = 'black',
   width,
   isCardImage,
   visibleSlides,
   cellSpacing,
   data
}: CarouselProps): ReactElement {
   const classes = useStyles();
   const _width = width === 'md' ? 'sm' : width === 'xl' ? 'lg' : width;
   const _visibleSlides: number = visibleSlides[_width as keyof typeof visibleSlides];

   return (
      <div className={classes.sliderContainer}>
         <CarouselProvider
            getControlsContainerStyles={(key) => {
               if (!isCardImage) return {};
               switch (key) {
                  case 'CenterLeft':
                     return {
                        top: '100px'
                     };
                  default:
                     return {
                        top: '100px'
                     };
               }
            }}
            dragging={true}
            enableKeyboardControls={true}
            renderBottomCenterControls={() => ''}
            framePadding={'0 46px'}
            disableEdgeSwiping={true}
            cellSpacing={cellSpacing}
            renderCenterLeftControls={({ previousSlide, currentSlide }) => {
               console.log(currentSlide);
               if (_visibleSlides >= data.length || currentSlide === 0) return <div />;
               return (
                  <button
                     arial-label="previous topic"
                     className={classes.arrowContainer}
                     onClick={previousSlide}>
                     <ArrowBackIosIcon style={{ color: `${arrowColor}` }} />
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
                     <ArrowForwardIosIcon style={{ color: `${arrowColor}` }} />
                  </button>
               );
            }}
            autoplay={true}
            slidesToScroll={1}
            cellAlign={'left'}
            slidesToShow={_visibleSlides}>
            {mapSlides(data, isCardImage)}
         </CarouselProvider>
      </div>
   );
}

export const Carousel = withWidth()(CarouselComponent);
