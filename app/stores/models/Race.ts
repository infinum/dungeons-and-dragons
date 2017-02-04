import {StaticModel} from './base/StaticModel';

export class Race extends StaticModel {
  public static type = 'race';

  public id: string;
  public name: string;
};
