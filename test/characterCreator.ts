import {initStatic} from 'stores/data';
import {DataCollection} from 'stores/DataCollection';
import {Character} from 'stores/models';

type CharacterObject = {name?: string, [key: string]: any};

function createCharacters(data: Array<CharacterObject>): Array<Character>;
function createCharacters(data: CharacterObject): Character;
function createCharacters(data: CharacterObject|Array<CharacterObject>): Character|Array<Character> {
  const collection = new DataCollection();
  const characters = data instanceof Array
    ? data.map((itemData) => new Character(itemData, collection))
    : new Character(data, collection);
  collection.add(characters);
  initStatic(collection);
  return characters;
}

export default createCharacters;
