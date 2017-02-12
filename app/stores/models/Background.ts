import {StaticModel} from './base/StaticModel';

export class Background extends StaticModel {
  public static type = 'background';

  public id: string;
  public name: string;
  public skillProficiencies: Array<string>;
};
