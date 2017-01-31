import {Collection} from 'mobx-collection-store';

import {Player, Stat} from 'stores/models';

// :-(
// Alternative: import * as KeysStore from 'mobx-keys-store';
// Issue with alternative - the typings need to be changed
const KeysStore = require('mobx-keys-store');

class DataCollection extends Collection {
  public static types = [Player, Stat];

  // Should be equal to enums/models
  public player: Array<Player>;
  public stat: Array<Stat>;
}

export const data = new DataCollection();
export const keys = new KeysStore();
