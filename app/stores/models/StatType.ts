import models from 'enums/models';
import {StaticModel} from './base/StaticModel';

export class StatType extends StaticModel {
  public static type = models.STAT_TYPE;

  public id: string;
  public name: string;
};
