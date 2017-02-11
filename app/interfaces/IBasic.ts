import {Alignment, Class, Level, Race, Stat} from 'stores/models';

export interface IBasic {
  name: string;
  class: Class;
  classId: string;
  level: Level;
  nextLevel: Level;
  background: string;
  playerName: string;
  race: Race;
  raceId: string;
  alignment: Alignment;
  alignmentId: string;
  experience?: number;
};
