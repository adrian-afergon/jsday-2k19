import { storiesOf } from '@storybook/react';
import * as React from 'react';
import {LongComponent} from './LongComponent';

storiesOf('LongComponent', module)
  .add('with text', () => (
  <LongComponent />
));
