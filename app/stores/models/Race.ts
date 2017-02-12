import {StaticModel} from './base/StaticModel';

export class Race extends StaticModel {
  public static type = 'race';
  public static refs = {subraces: 'subrace'};

  public id: string;
  public name: string;
  public description?: string;
  public abillityScoreIncrease?: {[abillity: string]: number};
  public proficiency?: Array<string>;
  public speed?: number;
  public subraces?: Array<Race>;
};
