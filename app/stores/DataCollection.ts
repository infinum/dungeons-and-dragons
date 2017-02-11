import {Collection} from 'mobx-collection-store';

import models from 'enums/models';
import {removeModel} from 'services/persistance';
import {Alignment, Class, Player, Race, Spell, Stat, StatType} from 'stores/models';

export class DataCollection extends Collection {
  public static types = [Alignment, Class, Player, Race, Spell, Stat, StatType];

  // Should be equal to enums/models
  public alignment: Array<Alignment>;
  public 'class': Array<Class>;
  public player: Array<Player>;
  public race: Array<Race>;
  public spell: Array<Spell>;
  public stat: Array<Stat>;
  public statType: Array<StatType>;

  /**
   * Create a default player with default data
   *
   * @param {Object} [data={}]
   * @returns {Player}
   *
   * @memberOf DataCollection
   */
  public createPlayer(data: Object = {}): Player {
    const player = Object.assign({
      stats: this.statType.map((statType) => ({type: statType.id})),
    }, data);

    return this.add<Player>(player, models.PLAYER);
  }

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
