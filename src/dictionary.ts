import { v4 as uuid } from 'uuid';
import { WordData } from 'src/types';
import { getRandomElement } from 'src/utils';

const DICTIONARY = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];

export function generateWordData(): WordData {
  return {
    id: uuid(),
    word: getRandomElement(DICTIONARY),
    timeToLive: 1000,
  };
}
