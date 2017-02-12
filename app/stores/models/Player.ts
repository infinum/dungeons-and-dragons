import {first, last, mapValues} from 'lodash';
import {autorun, computed} from 'mobx';
import {Collection} from 'mobx-collection-store';

import models from 'enums/models';
import {IAppearance, IBasic, IStats} from 'interfaces';
import {Alignment, Background, Class, Level, Race} from 'stores/models';
import {FormModel} from './base/FormModel';

type ICollection = {
  level: Array<Level>;
};

export class Player extends FormModel implements IBasic, IAppearance {
  public static type = models.PLAYER;

  public static refs = {
    alignment: 'alignment',
    background: 'background',
    class: 'class',
    race: 'race',
  };

  // Needs to be provided so everything will be observable as expected
  public static defaults = {
    alignment: 0,
    avatar: '',
    background: '',
    class: 0,
    experience: 0,
    height: '',
    name: '',
    playerName: '',
    race: 0,
    sex: '',
    stats: {
      charisma: 0,
      constitution: 0,
      dexterity: 0,
      intelligence: 0,
      strength: 0,
      wisdom: 0,
    },
    weight: '',
  };

  // A way to avoid circular references
  public __collection: Collection & ICollection;

  public id: number;
  public name: string;
  public class: Class;
  public classId: string;
  public background: Background;
  public backgroundId: string;
  public playerName: string;
  public race: Race;
  public raceId: string;
  public alignment: Alignment;
  public alignmentId: string;
  public experience?: number;

  public avatar?: string;
  public height?: string;
  public weight?: string;
  public sex?: string;

  public stats: IStats;

  @computed public get modifiers() {
    return mapValues(this.stats, (value) => Math.floor((value - 10) / 2));
  }

  @computed public get level(): Level {
    if (!this.__collection) {
      return null;
    }
    const levels = this.__collection.level.filter((level) => level.exp <= this.experience);
    return last(levels);
  }

  @computed public get nextLevel(): Level {
    if (!this.__collection) {
      return null;
    }
    const levels = this.__collection.level.filter((level) => level.exp > this.experience);
    return levels.length
      ? first(levels)
      : this.level;
  }

  @computed public get savingThrows() {
    const savingThrowns = {
      charisma: this.modifiers.charisma,
      constitution: this.modifiers.constitution,
      dexterity: this.modifiers.dexterity,
      intelligence: this.modifiers.intelligence,
      strength: this.modifiers.strength,
      wisdom: this.modifiers.wisdom,
    };

    return mapValues(savingThrowns, (value, key) => value + this.__getSavingThrowBonus(key));
  }

  @computed public get savingThrowProficiencies() {
    return this.class
      ? this.class.savingThrowProficienciesId
      : [];
  }

  @computed public get skills() {
    const skills = {
      acrobatics: this.modifiers.dexterity,
      animalHandling: this.modifiers.wisdom,
      arcana: this.modifiers.intelligence,
      athletics: this.modifiers.strength,
      deception: this.modifiers.charisma,
      history: this.modifiers.intelligence,
      insight: this.modifiers.wisdom,
      intimidation: this.modifiers.charisma,
      investigation: this.modifiers.intelligence,
      medicine: this.modifiers.wisdom,
      nature: this.modifiers.intelligence,
      perception: this.modifiers.wisdom,
      performance: this.modifiers.charisma,
      persuasion: this.modifiers.charisma,
      religion: this.modifiers.intelligence,
      sleightOfHand: this.modifiers.dexterity,
      stealth: this.modifiers.dexterity,
      survival: this.modifiers.wisdom,
    };

    return mapValues(skills, (value, key) => value + this.__getSkillBonus(key));
  }

  @computed public get skillProficiencies() {
    const proficiencies = [];
    if (this.background) {
      proficiencies.push(...this.background.skillProficiencies);
    }

    return proficiencies;
  }

  private __getSavingThrowBonus(name) {
    return this.savingThrowProficiencies.indexOf(name) !== -1 ? 2 : 0;
  }

  private __getSkillBonus(name) {
    return this.skillProficiencies.indexOf(name) !== -1 ? 2 : 0;
  }
}
