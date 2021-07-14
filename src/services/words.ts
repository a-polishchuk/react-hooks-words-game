import axios from 'axios';
import { WordData, IncomingWord } from 'src/types';

const MIN_LENGTH = 3;
const MAX_LENGTH = 8;
const MIN_TTL = 1000;
const MAX_TTL = 5000;

const axiosInstance = axios.create({
  baseURL: 'https://wordsapiv1.p.rapidapi.com/words/',
  headers: {
    'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
    'x-rapidapi-key': '385d091b5bmsh3626be3bd906437p1e6224jsne908e6c83f5d',
  },
});

export async function fetchRandomWord(): Promise<WordData> {
  const response = await axiosInstance.get(
    `?random=true&lettersMin=${MIN_LENGTH}&lettersMax=${MAX_LENGTH}`
  );

  const incomingWord: IncomingWord = response.data;
  const { word } = incomingWord;

  return {
    id: word,
    word,
    timeToLive: MIN_TTL + Math.random() * (MAX_TTL - MIN_TTL),
    complexity: word.length,
  };
}
