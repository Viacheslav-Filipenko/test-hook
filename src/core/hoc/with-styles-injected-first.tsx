import React from 'react';

import { StylesProvider } from '@material-ui/core';

export const withStylesInjectedFirst = <P extends object>(Component: React.ComponentType<P>) => {
   return (props: P) => {
      return (
         <StylesProvider injectFirst>
            <Component {...props} />
         </StylesProvider>
      );
   };
};
