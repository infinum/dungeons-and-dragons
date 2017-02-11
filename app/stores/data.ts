import {Collection} from 'mobx-collection-store';

import models from 'enums/models';
import {loadTypeModels} from 'services/persistance';

import alignments from 'data/alignments';
import classes from 'data/classes';
import races from 'data/races';
import spells from 'data/spells';
import statTypes from 'data/statTypes';

const modelsToHydrate = [
  models.PLAYER,
  models.STAT,
];

export function initStatic(data: Collection): void {
  data.add(alignments, models.ALIGNMENT);
  data.add(classes, models.CLASS);
  data.add(races, models.RACE);
  data.add(spells, models.SPELL);
  data.add(statTypes, models.STAT_TYPE);
};

export function hydrate(data: Collection): void {
  modelsToHydrate.forEach((type) => {
    data.add(loadTypeModels(type), type);
  });
};
