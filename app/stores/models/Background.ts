import models from 'enums/models';
import {StaticModel} from './base/StaticModel';

export class Background extends StaticModel {
  public static type = models.BACKGROUND;

  public id: string;
  public name: string;
  public skillProficiencies: Array<string>;
};
