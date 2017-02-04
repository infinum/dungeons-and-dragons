import {StaticModel} from './base/StaticModel';

export class Class extends StaticModel {
  public static type = 'class';

  public id: string;
  public name: string;
};
