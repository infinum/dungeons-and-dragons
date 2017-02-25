import {Collection} from 'mobx-collection-store';

import models from 'enums/models';
import {loadTypeModels} from 'services/persistance';

export function initStatic(data: Collection): void {
  (require as any).ensure(['data'], () => {
    const stats = require('data');
    data.add(stats.alignments, models.ALIGNMENT);
    data.add(stats.backgrounds, models.BACKGROUND);
    data.add(stats.classes, models.CLASS);
    data.add(stats.levels, models.LEVEL);
    data.add(stats.races, models.RACE);
    data.add(stats.spells, models.SPELL);
    data.add(stats.statTypes, models.STAT_TYPE);
  });
};

const modelsToHydrate = [
  models.PLAYER,
  models.STAT,
];

export function hydrate(data: Collection): void {
  modelsToHydrate.forEach((type) => {
    data.add(loadTypeModels(type), type);
  });
};
