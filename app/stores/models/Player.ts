import {autorun} from 'mobx';
import {Collection} from 'mobx-collection-store';

import models from 'enums/models';
import {IAppearance, IBasic} from 'interfaces';
import {data} from 'stores';
import {Alignment, Class, Race, Stat} from 'stores/models';
import {FormModel} from './FormModel';

export class Player extends FormModel implements IBasic, IAppearance {
  public static type = models.PLAYER;
  public static refs = {
    alignment: 'alignment',
    class: 'class',
    race: 'race',
    stats: 'stat',
  };

  // Needs to be provided so everything will be observable as expected
  public static defaults = {
    alignment: 0,
    avatar: '',
    background: '',
    class: 0,
    experience: 0,
    height: '',
    level: 1,
    name: '',
    playerName: '',
    race: 0,
    sex: '',
    weight: '',
  };

  public id: number;
  public name: string;
  public class: Class;
  public classId: string;
  public level?: number;
  public background: string;
  public playerName: string;
  public race: Race;
  public raceId: string;
  public alignment: Alignment;
  public alignmentId: string;
  public experience?: number;

  public avatar?: string;
  public height?: string;
  public weight?: string;
  public sex?: string;

  public stats: Array<Stat>; // Technically, this can also be only one stat...
}
