import { storiesOf } from '@storybook/react';
import * as React from 'react';
import {Commment} from './Commment';

storiesOf('Commment', module)
  .add('with text', () => (
  <Commment />
));
