import {computed} from 'mobx';
import {Model} from 'mobx-collection-store';

import models from 'enums/models';
import {IStat} from 'interfaces';
import {StatType} from 'stores/models';
import {FormModel} from './FormModel';

export class Stat extends FormModel implements IStat {
  public static type = models.STAT;
  public static refs = {type: models.STAT_TYPE};

  public static defaults = {
    value: 0,
  };

  public type: StatType;
  public typeId: string;
  public value?: number;

  @computed public get modifier(): number {
    return Math.floor((this.value - 10) / 2);
  }
}
