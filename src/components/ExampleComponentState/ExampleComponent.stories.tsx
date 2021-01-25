import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ExampleComponentState } from './ExampleComponent';
import { text } from '@storybook/addon-knobs/react';

const stories = storiesOf('ExampleComponentState', module);

stories.add(
   'ExampleComponentState',
   () => <ExampleComponentState text={text('text', 'Some text')} />,
   {
      info: { inline: true },
      text: `

  ### Notes

  Simple example component

  ### Usage
  ~~~js
  <ExampleComponent
    text="Some text"
  />
  ~~~

`
   }
);
