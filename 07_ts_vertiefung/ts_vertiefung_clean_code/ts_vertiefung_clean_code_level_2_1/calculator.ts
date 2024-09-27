const getNumberText = (num: number | undefined): string =>
  ['One', 'Two', 'Three', 'Four', 'Five'][num ? num - 1 : 0 - 1] ?? 'Unknown';

const userInput: number = Math.ceil(Math.random() * 7);
console.log(userInput);
const numberText = getNumberText(userInput);
console.log(numberText);
