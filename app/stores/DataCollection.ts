import {Collection} from 'mobx-collection-store';

import models from 'enums/models';
import {removeModel} from 'services/persistance';
import {Alignment, Background, Class, Level, Player, Race, Spell, StatType, SubRace} from 'stores/models';

export class DataCollection extends Collection {
  public static types = [Alignment, Background, Class, Level, Player, Race, Spell, StatType, SubRace];

  // Should be equal to enums/models
  public alignment: Array<Alignment>;
  public background: Array<Background>;
  public 'class': Array<Class>;
  public level: Array<Level>;
  public player: Array<Player>;
  public race: Array<Race>;
  public spell: Array<Spell>;
  public statType: Array<StatType>;
  public subrace: Array<SubRace>;

  /**
   * Remove the model from the store and persistent storage
   *
   * @param {string} type
   * @param {(number|string)} [id]
   *
   * @memberOf DataCollection
   */
  public remove(type: string, id?: number|string) {
    super.remove(type, id);
    removeModel(type, id);
  }
}
