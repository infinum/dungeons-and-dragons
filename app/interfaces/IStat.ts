import {StatType} from 'stores/models';

export interface IStat {
  type: StatType;
  typeId: string;
  value?: number;
  modifier?: number;
};
