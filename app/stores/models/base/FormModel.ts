import {action} from 'mobx';
import {Model} from 'mobx-collection-store';

import {PersistantModel} from './PersistantModel';

export class FormModel extends PersistantModel {

  public setValue(name) {
    return action((value) => {
      this[name] = value;
    });
  }
}
