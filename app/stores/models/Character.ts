import {action, autorun, computed, extendObservable} from 'mobx';
import {Collection} from 'mobx-collection-store';

import models from 'enums/models';
import {IAppearance, IBasic, IStats} from 'interfaces';
import {Alignment, Background, Class, Level, Race, SubRace} from 'stores/models';
import conditional from 'utils/conditional';
import {first, last, mapValues} from 'utils/helpers';
import {FormModel} from './base/FormModel';

type ICollection = {
  level: Array<Level>;
};

export class Character extends FormModel implements IBasic, IAppearance {
  public static type = models.CHARACTER;

  public static refs = {
    alignment: models.ALIGNMENT,
    background: models.BACKGROUND,
    class: models.CLASS,
    race: models.RACE,
  };

  // Needs to be provided so everything will be observable as expected
  public static defaults = {
    __subraceId: '',
    alignment: '',
    avatar: '',
    background: '',
    class: '',
    experience: 0,
    height: '',
    inspiration: false,
    name: '',
    playerName: '',
    race: '',
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

  public inspiration: boolean;

  public stats: IStats;
  public subrace: SubRace;

  constructor(data?: Object, collection?: Collection) {
    super(data, collection);

    extendObservable(this, {
      subrace: conditional('subrace', (subId) => this.race && this.race.findSubrace(subId), this),
    });
  }

  @computed public get availableSubraces(): Array<SubRace> {
    return this.race ? this.race.subraces : [];
  }

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
    const savingThrows = {
      charisma: this.modifiers.charisma,
      constitution: this.modifiers.constitution,
      dexterity: this.modifiers.dexterity,
      intelligence: this.modifiers.intelligence,
      strength: this.modifiers.strength,
      wisdom: this.modifiers.wisdom,
    };

    return mapValues(savingThrows, (value, key) => value + this.__getSavingThrowBonus(key));
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

  @computed get passivePerception(): number {
    return this.stats.wisdom;
  }

  @computed get proficiencyBonus(): number {
    return this.level ? this.level.proficiency : 0;
  }

  private __getSavingThrowBonus(name) {
    return this.savingThrowProficiencies.indexOf(name) !== -1 ? this.proficiencyBonus : 0;
  }

  private __getSkillBonus(name) {
    return this.skillProficiencies.indexOf(name) !== -1 ? this.proficiencyBonus : 0;
  }
}
