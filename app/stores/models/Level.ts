import models from 'enums/models';
import {StaticModel} from './base/StaticModel';

export class Level extends StaticModel {
  public static type = models.LEVEL;
  public static idAttribute = 'level';

  public level: number;
  public exp: number;
  public proficiency: number;

  public toString(): string {
    return this.level.toString();
  }
}
