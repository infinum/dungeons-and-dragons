import {initStatic} from 'stores/data';
import {DataCollection} from 'stores/DataCollection';
import {Character} from 'stores/models';

interface ICharacterObject {
  name?: string;
  [key: string]: any;
}

function createCharacters(data: Array<ICharacterObject>): Array<Character>;
function createCharacters(data: ICharacterObject): Character;
function createCharacters(data: ICharacterObject|Array<ICharacterObject>): Character|Array<Character> {
  const collection = new DataCollection();
  const characters = data instanceof Array
    ? data.map((itemData) => new Character(itemData, collection))
    : new Character(data, collection);
  collection.add(characters);
  initStatic(collection);
  return characters;
}

export default createCharacters;
