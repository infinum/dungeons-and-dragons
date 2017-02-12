import {StaticModel} from './base/StaticModel';

export class SubRace extends StaticModel {
  public static type = 'subrace';

  public id: string;
  public name: string;
  public abillityScoreIncrease: {[abillity: string]: number};
};
