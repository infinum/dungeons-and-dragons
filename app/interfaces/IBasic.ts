import {Alignment, Class, Race, Stat} from 'stores/models';

export interface IBasic {
  name: string;
  class: Class;
  classId: string;
  level?: number;
  background: string;
  playerName: string;
  race: Race;
  raceId: string;
  alignment: Alignment;
  alignmentId: string;
  experience?: number;
};
