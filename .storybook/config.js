import {configure} from '@kadira/storybook';
import 'styles/main.scss';
import 'styles/storybook.scss';

function loadStories() {
  require('components/story');
}

configure(loadStories, module);