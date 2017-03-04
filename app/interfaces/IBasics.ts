import {IStats} from 'interfaces';
import {Alignment, Background, Class, Level, Race, SubRace} from 'stores/models';
import {DropdownSource} from 'utils/dropdownSource';

export interface IBasics {
  alignments: Array<DropdownSource>;
  backgrounds: Array<DropdownSource>;
  classes: Array<DropdownSource>;
  races: Array<DropdownSource>;
  subraces: Array<DropdownSource>;
};
