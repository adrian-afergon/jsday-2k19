import { storiesOf } from '@storybook/react';
import * as React from 'react';
import {VideoItem} from './VideoItem';
import { action } from '@storybook/addon-actions';

storiesOf('VideoItem', module)
  .add('with text', () => (
  <VideoItem onClick={action('clicked')}/>
));
