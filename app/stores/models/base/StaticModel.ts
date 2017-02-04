import {toJS} from 'mobx';
import {Model} from 'mobx-collection-store';

export class StaticModel extends Model {

  public toJS() {
    return toJS(this[this.static.idAttribute]);
  }
}
