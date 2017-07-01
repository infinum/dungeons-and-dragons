import models from 'enums/models';
import {StaticModel} from './base/StaticModel';

export class SubRace extends StaticModel {
  public static type = models.SUBRACE;

  public id: string;
  public name: string;
  public abillityScoreIncrease: {[abillity: string]: number};
}
