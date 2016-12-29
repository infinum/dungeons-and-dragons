import {configure} from '@kadira/storybook';
import 'styles/storybook.scss';

function loadStories() {
  require('components/story');
}

configure(loadStories, module);
