import { storiesOf } from '@storybook/react';
import * as React from 'react';
import {ReplyComment} from './ReplyComment';
import { action } from '@storybook/addon-actions';

storiesOf('ReplyComment', module)
  .add('with text', () => (
  <ReplyComment saveComment={action('clicked')}/>
));
