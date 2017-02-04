import {Collection} from 'mobx-collection-store';

import models from 'enums/models';
import {loadTypeModels} from 'services/persistance';

const alignments = require('data/alignments.json');
const classes = require('data/classes.json');
const races = require('data/races.json');
const spells = require('data/spells.json');
const statTypes = require('data/statTypes.json');

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
