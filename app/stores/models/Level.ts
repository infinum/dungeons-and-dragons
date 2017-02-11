import {StaticModel} from './base/StaticModel';

export class Level extends StaticModel {
  public static type = 'level';
  public static idAttribute = 'level';

  public level: number;
  public exp: number;
  public proficiency: number;

  public toString(): string {
    return this.level.toString();
  }
};
