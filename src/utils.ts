export function isLetter(key: string) {
  return key >= 'a' && 'key' <= 'z';
}

export function getRandomElement<T>(array: T[]): T {
  const maxIndex = array.length - 1;
  const randomIndex = Math.round(Math.random() * maxIndex);
  return array[randomIndex];
}

export function formatTime(millis: number): string {
  const seconds = Math.floor(millis / 1000);
  const minutes = Math.floor(seconds / 60);
  const ss = ensure2Decimals(seconds % 60);
  const mm = ensure2Decimals(minutes % 60);
  return `${mm}:${ss}`;
}

function ensure2Decimals(n: number): string {
  if (n < 10) {
    return '0' + n.toFixed(0);
  }
  return n.toFixed(0);
}
