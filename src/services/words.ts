import axios from 'axios';
import { WordData, IncomingWord } from 'src/types';
import secrets from 'src/secrets.json';

const MIN_LENGTH = 3;
const MAX_LENGTH = 8;
const MIN_TTL = 1000;
const MAX_TTL = 5000;

const axiosInstance = axios.create({
  baseURL: 'https://wordsapiv1.p.rapidapi.com/words/',
  headers: {
    'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
    'x-rapidapi-key': secrets['rapidapi-key'],
  },
});

export async function fetchRandomWord(): Promise<WordData> {
  const response = await axiosInstance.get('', {
    params: {
      random: true,
      partofspeech: 'noun',
      letterPattern: '^[A-Za-z]+$',
      lettersMin: MIN_LENGTH,
      lettersMax: MAX_LENGTH,
    },
  });

  const incomingWord: IncomingWord = response.data;
  const { word } = incomingWord;

  return {
    id: word,
    word,
    timeToLive: MIN_TTL + Math.random() * (MAX_TTL - MIN_TTL),
    complexity: word.length,
  };
}
