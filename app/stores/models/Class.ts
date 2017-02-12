import models from 'enums/models';
import {StatType} from 'stores/models';
import {StaticModel} from './base/StaticModel';

export class Class extends StaticModel {
  public static type = models.CLASS;
  public static refs = {
    primaryAbillity: models.STAT_TYPE,
    savingThrowProficiencies: models.STAT_TYPE,
  };

  public id: string;
  public name: string;
  public customSkillCount?: number;
  public customSkillList?: Array<string>;
  public primaryAbillity?: Array<StatType>;
  public savingThrowProficiencies: Array<StatType>;
  public savingThrowProficienciesId: Array<string>;
};
