import {attempt} from 'lodash';
import {autorun, toJS} from 'mobx';
import {Collection, Model} from 'mobx-collection-store';

import {saveModel} from 'services/persistance';

export class PersistantModel extends Model {

  constructor(data: Object, collection?: Collection) {

    super(data, collection);

    autorun(() => attempt(saveModel, this));
  }
}
