import { storiesOf } from '@storybook/react';
import * as React from 'react';
import {VideoDetails} from './VideoDetails';

storiesOf('VideoDetails', module)
  .add('with text', () => (
  <VideoDetails selectedVideo={null}/>
));
