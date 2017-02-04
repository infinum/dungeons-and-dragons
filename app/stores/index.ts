import {Collection} from 'mobx-collection-store';

import {hydrate, initStatic} from 'stores/data';
import {Alignment, Class, Player, Race, Spell, Stat, StatType} from 'stores/models';

// :-(
// Alternative: import * as KeysStore from 'mobx-keys-store';
// Issue with alternative - the typings need to be changed
const KeysStore = require('mobx-keys-store');

class DataCollection extends Collection {
  public static types = [Alignment, Class, Player, Race, Spell, Stat, StatType];

  // Should be equal to enums/models
  public alignment: Array<Alignment>;
  public 'class': Array<Class>;
  public player: Array<Player>;
  public race: Array<Race>;
  public spell: Array<Spell>;
  public stat: Array<Stat>;
  public statType: Array<StatType>;
}

export const data = new DataCollection();
export const keys = new KeysStore();

initStatic(data);
hydrate(data);
