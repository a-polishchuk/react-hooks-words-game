import { Action, State } from 'src/types';

export function submitWord(state: State, action: Action): State {
  const typedWord = action.payload;
  const matchedWords = state.words.filter((w) => w.word === typedWord);
  if (matchedWords.length === 0) {
    return state;
  }

  const pointsArray = matchedWords.map((w) => w.complexity);
  const pointsSum = pointsArray.reduce((prev, current) => prev + current, 0);

  return {
    ...state,
    words: state.words.filter((w) => w.word !== typedWord),
    score: state.score + pointsSum,
    lastWord: typedWord,
    lastPoints: pointsSum,
  };
}
