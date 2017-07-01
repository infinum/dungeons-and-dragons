import models from 'enums/models';
import {SubRace} from 'stores/models';
import {StaticModel} from './base/StaticModel';

export class Race extends StaticModel {
  public static type = models.RACE;
  public static refs = {subraces: models.SUBRACE};

  public id: string;
  public name: string;
  public description?: string;
  public abillityScoreIncrease?: {[abillity: string]: number};
  public proficiency?: Array<string>;
  public speed?: number;
  public subraces?: Array<SubRace>;

  public findSubrace(id: string) {
    return this.subraces.find((subrace) => subrace.id === id);
  }
}
