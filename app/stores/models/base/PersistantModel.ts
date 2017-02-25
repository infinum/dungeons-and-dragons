import {autorun, toJS} from 'mobx';
import {Collection, Model} from 'mobx-collection-store';

import {saveModel} from 'services/persistance';

export class PersistantModel extends Model {

  constructor(data: Object, collection?: Collection) {

    super(data, collection);

    autorun(() => {
      try {
        saveModel(this);
      } catch (e) {
        // Nothing to do
      }
    });
  }
}
