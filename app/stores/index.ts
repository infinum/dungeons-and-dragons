import {JsonApiRecord} from 'mobx-jsonapi-store';

// :-(
// Alternative: import * as KeysStore from 'mobx-keys-store';
// Issue with alternative - the typings need to be changed
const KeysStore = require('mobx-keys-store');

import ApiAdapterStore from 'stores/api';

class User extends JsonApiRecord {}
class Photo extends JsonApiRecord {}

import * as ks from 'mobx-keys-store';

export default {
  data: new ApiAdapterStore({
    models: {
      user: User,
      photo: Photo
    },
    defaults: {
      photo: {selected: false}
    }
  }),
  keys: new KeysStore()
};
