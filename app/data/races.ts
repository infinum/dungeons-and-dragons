// tslint:disable:max-line-length

export default [{
  abillityScoreIncrease: {
    charisma: 1,
    constitution: 1,
    dexterity: 1,
    intelligence: 1,
    strength: 1,
    wisdom: 1,
  },
  description: 'Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.',
  id: 'human',
  name: 'Human',
  speed: 30,
  subraces: [],
}, {
  abillityScoreIncrease: {dexterity: 2},
  description: 'Elves are a magical people of otherworldly grace, living in the world but not entirely part of it.',
  id: 'elf',
  name: 'Elf',
  proficiency: ['perception'],
  speed: 30,
  subraces: [{
    abillityScoreIncrease: {intelligence: 1},
    id: 'high-elf',
    name: 'High Elf',
  }, {
    abillityScoreIncrease: {wisdom: 1},
    id: 'wood-elf',
    name: 'Wood Elf',
  }],
}, {
  abillityScoreIncrease: {constitution: 2},
  description: 'Dwarves are solid and enduring like the mountains they love, weathering the passage of centuries with stoic endurance and little change.',
  id: 'dwarf',
  name: 'Dwarf',
  speed: 25,
  subraces: [{
    abillityScoreIncrease: {wisdom: 1},
    id: 'hill-dwarf',
    name: 'Hill Dwarf',
  }, {
    abillityScoreIncrease: {strength: 2},
    id: 'mountain-dwarf',
    name: 'Mountain Dwarf',
  }],
}, {
  abillityScoreIncrease: {dexterity: 2},
  description: 'The comforts of home are the goals of most halflings’ lives: a place to settle in peace and quiet, far from marauding monsters and clashing armies.',
  id: 'halfling',
  name: 'Halfling',
  speed: 25,
  subraces: [{
    abillityScoreIncrease: {charisma: 1},
    id: 'lightfoor',
    name: 'Lightfoot',
  }, {
    abillityScoreIncrease: {constitution: 1},
    id: 'stout',
    name: 'Stout',
  }],
}, {
  description: 'Gnomes take delight in life, enjoying every moment of invention, exploration, investigation, creation, and play.',
  id: 'gnome',
  name: 'Gnome',
}, {
  description: 'Half-orcs are not evil by nature, but evil does lurk within them, whether they embrace it or rebel against it.',
  id: 'half-orc',
  name: 'Half-orc',
}, {
  description: 'Half-Elves have curiosity and ambitions like humans but they have sense for magic and love for nature like their elven parents.',
  id: 'half-elf',
  name: 'Half-elf',
}, {
  description: 'Most tieflings prefer to be adventurers and rarely ever adventure with their own kin due to the prejudices of other races (people are concerned when two or more of their kind travel together).',
  id: 'tiefling',
  name: 'Tiefling',
}, {
  description: 'Dragonborn are a transitive race, members of other humanoid races who, to show devotion to Bahamut, willingly took on draconic traits in place of their original biology.',
  id: 'dragonborn',
  name: 'Dragonborn',
}];
