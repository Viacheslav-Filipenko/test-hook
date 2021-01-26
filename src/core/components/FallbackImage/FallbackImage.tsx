import React from 'react';

import NoSimOutlinedIcon from '@material-ui/icons/NoSimOutlined';

import useStyles from './FallbackImage.jss';

export interface IFallbackImageProps {
   label: string;
   text: string;
}

export const FallbackImage: React.FC<IFallbackImageProps> = ({ label, text }) => {
   const classes = useStyles();

   return (
      <div role="img" arial-label={label} className={classes.container}>
         <div>
            <div className={classes.headline}>{{ text }}</div>
            <NoSimOutlinedIcon fontSize="large" />
         </div>
      </div>
   );
};
