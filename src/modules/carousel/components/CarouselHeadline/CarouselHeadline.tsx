import React from 'react';

import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import useStyles from './carousel-headline.jss';

export interface ICarouselHeadlineProps {
   title: string;
   href: string;
   color: string;
}

export const CarouselHeadline: React.FC<ICarouselHeadlineProps> = ({ title, href, color }) => {
   const classes = useStyles();

   return (
      <div className={classes.container}>
         <div className={classes.headlineWrapper}>
            <div className={classes.headline}>
               <Divider className={classes.divider} style={{ backgroundColor: color }} />
               <Typography className={classes.title} style={{ color: color }} variant="h1">
                  <Link className={classes.link} color="inherit" href={href}>
                     {title}
                  </Link>
               </Typography>
            </div>
         </div>
      </div>
   );
};
