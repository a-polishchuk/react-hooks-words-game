import { CSSProperties, useEffect, useState, useRef } from 'react';

const UPDATE_DELAY = 100;

interface Props {
  score: number;
  style: CSSProperties;
}

function ScoreCounter({ score, style }: Props) {
  const [displayedScore, setDisplayedScore] = useState<number>(score);
  const scoreRef = useRef<number>(score);

  useEffect(() => {
    scoreRef.current = score;
  }, [score]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentScore = scoreRef.current;
      setDisplayedScore((value) => {
        if (value < currentScore) {
          return value + 1;
        }
        return currentScore;
      });
    }, UPDATE_DELAY);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <span style={style}>{displayedScore}</span>;
}

export default ScoreCounter;
