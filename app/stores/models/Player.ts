import {Model} from 'mobx-collection-store';

import models from 'enums/models';
import {IAppearance, IBasic} from 'interfaces';
import {Stat} from 'stores/models';

export class Player extends Model implements IBasic, IAppearance {
  public static type = models.PLAYER;
  public static refs = {stats: 'stat'};

  // Needs to be provided so everything will be observable as expected
  public static defaults = {
    aligement: '',
    avatar: '',
    background: '',
    class: '',
    expirience: 0,
    height: '',
    level: 1,
    name: '',
    playerName: '',
    race: '',
    sex: '',
    weight: '',
  };

  public name: string;
  public class: string;
  public level?: number;
  public background: string;
  public playerName: string;
  public race: string;
  public aligement: string;
  public expirience?: number;

  public avatar?: string;
  public height?: string;
  public weight?: string;
  public sex?: string;

  public stats: Array<Stat>; // Technically, this can also be only one stat...
}
