export const characters = [
  'pig',
  'duck',
  'zebra',
  'tiger',
  'frog',
  'peanut man',
  'fred flinstone',
  'bugs bunny',
  'ronald mcdonald',
];

export const scenarios = [
  'smoking in paris',
  'crying over spilled milk',
  'biking the tour de france',
  'eating tacos in mexico',
  'at an all you can eat buffet',
  'reading a really sad short story',
  'writing a really dark short story',
  'practicing harry potter spells',
];

export function createScene() {
  const characterIndex =
    characters[Math.floor(Math.random() * characters.length)];
  const scenarioIndex = scenarios[Math.floor(Math.random() * scenarios.length)];
  return `${characterIndex} ${scenarioIndex}`;
}
