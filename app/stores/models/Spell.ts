import models from 'enums/models';
import {Class} from 'stores/models';
import {StaticModel} from './base/StaticModel';

export class Spell extends StaticModel {
  public static type = models.SPELL;
  public static idAttribute = 'name';

  public name: string;
  public desc: string;
  public page: string;
  public range: string;
  public components: string;
  public material: string;
  public ritual: boolean;
  public duration: string;
  public concentration: boolean;
  public castingTime: string;
  public level: number;
  public school: string;
  public class: Array<Class>;
};
