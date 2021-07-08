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

export function generateWordData(maxX: number, maxY: number): WordData {
  return {
    id: uuid(),
    word: getRandomElement(DICTIONARY),
    left: Math.random() * maxX,
    top: Math.random() * maxY,
    timeToLive: 1000,
  };
}
