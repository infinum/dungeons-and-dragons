import {Collection} from 'mobx-collection-store';

// :-(
// Alternative: import * as KeysStore from 'mobx-keys-store';
// Issue with alternative - the typings need to be changed
const KeysStore = require('mobx-keys-store');

class DataCollection extends Collection {
  public static types = []; // TODO: Add models
}

export default {
  data: new DataCollection(),
  keys: new KeysStore(),
};
