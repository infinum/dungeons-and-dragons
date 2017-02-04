import {hydrate, initStatic} from 'stores/data';
import {DataCollection} from 'stores/DataCollection';

// :-(
// Alternative: import * as KeysStore from 'mobx-keys-store';
// Issue with alternative - the typings need to be changed
const KeysStore = require('mobx-keys-store');

export const data = new DataCollection();
export const keys = new KeysStore();

initStatic(data);
hydrate(data);
