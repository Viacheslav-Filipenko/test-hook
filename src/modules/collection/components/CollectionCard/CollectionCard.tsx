import React from 'react';

import Card from '@material-ui/core/Card';
import { ButtonBase } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PhotoLibraryOutlinedIcon from '@material-ui/icons/PhotoLibraryOutlined';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import useStyles from './collectionCard.jss';

export interface ICollectionCardProps {
   title: string;
   subtitle: string;
   count: number;
   image: string;
   actionText?: string;
   tintColor: string;
   onClick?: () => void;
}

export const CollectionCardComponent: React.FC<ICollectionCardProps> = (props) => {
   const { image, title, subtitle, tintColor, count, onClick, actionText = 'Discover' } = props;

   const classes = useStyles();

   return (
      <Card className={classes.card}>
         <CardMedia className={classes.cardMedia} image={image} />
         <CardContent className={classes.cardContent} style={{ backgroundColor: tintColor }}>
            <div className={classes.cardHeader}>
               <div className={classes.cardCountArea}>
                  <PhotoLibraryOutlinedIcon />
                  <Typography variant="caption">{count}</Typography>
               </div>
               <ButtonBase
                  className={classes.cardDiscoverButton}
                  onClick={() => {
                     if (onClick) {
                        onClick();
                     }
                  }}>
                  <Typography variant="caption" className={classes.cardDiscoverButtonTypo}>
                     {actionText}
                  </Typography>
                  <ArrowRightAltIcon />
               </ButtonBase>
            </div>
            <div className={classes.cardTitleArea}>
               <div>
                  <Typography variant="h3" className={classes.cardTitleTypo}>
                     {title}
                  </Typography>
               </div>
               <div>
                  <Typography variant="body1" className={classes.cardSubtitleTypo}>
                     {subtitle}
                  </Typography>
               </div>
            </div>
         </CardContent>
      </Card>
   );
};

export const CollectionCard = CollectionCardComponent;
