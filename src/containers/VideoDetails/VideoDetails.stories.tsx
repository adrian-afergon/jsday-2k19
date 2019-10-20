import { storiesOf } from '@storybook/react';
import * as React from 'react';
import {VideoDetails} from './VideoDetails';
import { action } from '@storybook/addon-actions';

storiesOf('VideoDetails', module)
  .add('with text', () => (
  <VideoDetails selectedVideo={null} onSave={action('Clicked')}/>
));
