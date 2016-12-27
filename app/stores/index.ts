import {JsonApiRecord} from 'mobx-jsonapi-store';
import KeysStore from 'mobx-keys-store';

import ApiAdapterStore from 'stores/api';

class User extends JsonApiRecord {}
class Photo extends JsonApiRecord {}

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
