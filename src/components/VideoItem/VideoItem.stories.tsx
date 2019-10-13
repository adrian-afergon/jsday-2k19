import { storiesOf } from '@storybook/react';
import * as React from 'react';
import {VideoItem} from './VideoItem';

storiesOf('VideoItem', module)
  .add('with text', () => (
  <VideoItem />
));
