import {StatType} from 'stores/models';
import {StaticModel} from './base/StaticModel';

export class Class extends StaticModel {
  public static type = 'class';
  public static refs = {
    primaryAbillity: 'stat-type',
    savingThrowProficiencies: 'stat-type',
  };

  public id: string;
  public name: string;
  public customSkillCount?: number;
  public customSkillList?: Array<string>;
  public primaryAbillity?: Array<StatType>;
  public savingThrowProficiencies: Array<StatType>;
  public savingThrowProficienciesId: Array<string>;
};
