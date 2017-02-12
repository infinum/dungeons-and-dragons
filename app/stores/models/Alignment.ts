import models from 'enums/models';
import {StaticModel} from './base/StaticModel';
export class Alignment extends StaticModel {
  public static type = models.ALIGNMENT;

  public id: string;
  public name: string;
};
