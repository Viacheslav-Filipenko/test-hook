import React, { useState } from 'react';

import './ExampleComponent.css';

export interface Props {
   /**
    * Simple text prop
    **/
   text: string;
}

export const ExampleComponentState: React.FC<Props> = ({ text }) => {
   const [value, setValue] = useState('use state');

   setValue('used state');

   return (
      <div className="test">
         Example Component: {text}
         <p>{value}</p>
      </div>
   );
};
