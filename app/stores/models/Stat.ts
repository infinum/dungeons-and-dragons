import {Model} from 'mobx-collection-store';

import models from 'enums/models';
import {IStat} from 'interfaces';

export class Stat extends Model implements IStat {
  public static type = models.STAT;

  public static defaults = {
    modifier: 0,
    name: '',
    value: 0,
  };

  public name: string;
  public value?: number;
  public modifier?: number;
}
