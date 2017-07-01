import {computed, toJS} from 'mobx';
import {Model} from 'mobx-collection-store';

export class StaticModel extends Model {
  public toJS() {
    return toJS(this[this.static.idAttribute]);
  }

  @computed get snapshot() {
    return super.toJS();
  }
}
