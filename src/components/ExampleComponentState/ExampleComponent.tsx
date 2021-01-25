import React, { useState } from 'react';

export interface Props {
   /**
    * Simple text prop
    **/
   text: string;
}

export const ExampleComponentState: React.FC<Props> = ({ text }) => {
   const [value, setValue] = useState('use state');

   if (value === 'use state') {
      setValue('used state');
   }

   return (
      <div className="test">
         Example Component: {text}
         <p>{value}</p>
      </div>
   );
};
