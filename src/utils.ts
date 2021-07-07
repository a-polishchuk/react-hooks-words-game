export function isLetter(key: string) {
  return key >= 'a' && 'key' <= 'z';
}

export function getRandomElement<T>(array: T[]): T {
  const maxIndex = array.length - 1;
  const randomIndex = Math.round(Math.random() * maxIndex);
  return array[randomIndex];
}
