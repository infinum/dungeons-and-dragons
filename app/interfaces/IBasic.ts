import {IStats} from 'interfaces';
import {Alignment, Background, Class, Level, Race, SubRace} from 'stores/models';

export interface IBasic {
  name: string;
  class: Class;
  classId: string;
  level: Level;
  nextLevel: Level;
  background: Background;
  backgroundId: string;
  playerName: string;
  race: Race;
  raceId: string;
  alignment: Alignment;
  alignmentId: string;
  experience?: number;
  stats: IStats;
  subrace?: SubRace;
  proficiencyBonus: number;
  inspiration: boolean;
};
