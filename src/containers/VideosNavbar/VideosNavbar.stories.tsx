import { storiesOf } from '@storybook/react';
import * as React from 'react';
import {VideosNavbar} from './VideosNavbar';

storiesOf('VideosNavbar', module)
  .add('with text', () => (
  <VideosNavbar categories={[]} videos={[]}/>
));
