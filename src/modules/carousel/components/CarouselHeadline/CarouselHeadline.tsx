import React from 'react';

import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import useStyles from './carousel-headline.jss';

export interface ICarouselHeadlineProps {
   href: string;
   color: string;
   children?: React.ReactNode;
}

export const CarouselHeadline: React.FC<ICarouselHeadlineProps> = ({ children, href, color }) => {
   const classes = useStyles();

   return (
      <div className={classes.carouselHeadline + ' ' + 'container'}>
         <div className="headlineWrapper">
            <div className="headline">
               <Divider className="divider" style={{ backgroundColor: color }} />
               <Typography className="title" style={{ color: color }} variant="h1">
                  <Link className="link" color="inherit" href={href}>
                     {children}
                  </Link>
               </Typography>
            </div>
         </div>
      </div>
   );
};
