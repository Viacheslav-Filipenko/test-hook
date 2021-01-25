import React from 'react';

import './ExampleComponent.css';

export interface Props {
   /**
    * Simple text prop
    **/
   text: string;
}

export const ExampleComponent: React.FC<Props> = ({ text }) => {
   return (
      <div className="test">
         Example Component: {text}
         <p>Coool!</p>
      </div>
   );
};
