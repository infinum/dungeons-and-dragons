import {IStats} from 'interfaces';
import {Alignment, Background, Class, Level, Race, SubRace} from 'stores/models';
import {IDropdownSource} from 'utils/dropdownSource';

export interface IBasics {
  alignments: Array<IDropdownSource>;
  backgrounds: Array<IDropdownSource>;
  classes: Array<IDropdownSource>;
  races: Array<IDropdownSource>;
  subraces: Array<IDropdownSource>;
}
