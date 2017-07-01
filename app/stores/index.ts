import KeysStore from 'mobx-keys-store';
import {init} from 'mobx-store-devtools';

import {hydrate, initStatic} from 'stores/data';
import {DataCollection} from 'stores/DataCollection';

export const data = new DataCollection();
export const keys = new KeysStore();

hydrate(data);
initStatic(data)
  .then(() => init(data)); // Init DevTools after all data is loaded
