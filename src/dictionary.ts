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

const MIN_TTL = 1000;
const MAX_TTL = 5000;

export function generateWordData(): WordData {
  const word = getRandomElement(DICTIONARY);
  return {
    id: uuid(),
    word,
    timeToLive: MIN_TTL + Math.random() * (MAX_TTL - MIN_TTL),
    complexity: word.length,
  };
}
