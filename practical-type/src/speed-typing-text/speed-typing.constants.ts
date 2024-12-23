export const NUMBER_TO_NUMBER_NAME: {
  [key: number]: string;
} =
{
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  21: 'twenty-one',
  22: 'twenty-two',
  23: 'twenty-three',
  24: 'twenty-four',
  25: 'twenty-five',
  26: 'twenty-six',
  27: 'twenty-seven',
  28: 'twenty-eight',
  29: 'twenty-nine',
  30: 'thirty',
  31: 'thirty-one',
  32: 'thirty-two',
  33: 'thirty-three',
  34: 'thirty-four',
  35: 'thirty-five',
  36: 'thirty-six',
  37: 'thirty-seven',
  38: 'thirty-eight',
  39: 'thirty-nine',
  40: 'forty',
  41: 'forty-one',
  42: 'forty-two',
  43: 'forty-three',
  44: 'forty-four',
  45: 'forty-five',
  46: 'forty-six',
  47: 'forty-seven',
  48: 'forty-eight',
  49: 'forty-nine',
  50: 'fifty',
  51: 'fifty-one',
  52: 'fifty-two',
  53: 'fifty-three',
  54: 'fifty-four',
  55: 'fifty-five',
}
export const NON_LETTER_CHAR_TO_NAME: {
  [key: string]: string;
} = {
  ' ': 'space',
  '~': 'tilde',
  '`': 'backtick',
  '!': 'exclamation',
  '@': 'at',
  '#': 'hash',
  '$': 'dollar',
  '%': 'percent',
  '^': 'caret',
  '&': 'ampersand',
  '*': 'asterisk',
  '(': 'open-parenthesis',
  ')': 'close-parenthesis',
  '-': 'dash',
  '_': 'underscore',
  '=': 'equal',
  '+': 'plus',
  '[': 'open-bracket',
  ']': 'close-bracket',

  '{': 'open-curly-bracket',
  '}': 'close-curly-bracket',
  '\\': 'backslash',
  '|': 'pipe',
  ';': 'semicolon',
  ':': 'colon',
  '\'': 'single-quote',
  '"': 'double-quote',
  ',': 'comma',
  '<': 'less-than',
  '.': 'period',
  '>': 'greater-than',
  '/': 'slash',
  '?': 'question',
}

function handleKeyValue(key: string) {
  if (isNumberKey(key)) {
    return NUMBER_TO_NUMBER_NAME[parseInt(key)]
  }
  if (isNonLetterKey(key)) {
    return NON_LETTER_CHAR_TO_NAME[key]
  }

  return key

}

export function handleValue(value: string): string {
  if (isNumberValue(value)) {
    return flipValuesAndKeys(NUMBER_TO_NUMBER_NAME)[value]
  }
  if (isNonLetterValue(value)) {
    return flipValuesAndKeys(NON_LETTER_CHAR_TO_NAME)[value]
  }

  return value
}
export function flipValuesAndKeys(obj: {
  [key: string]: string;
}): {
  [key: string]: string;
} {
  const flipped: {
    [key: string]: string;
  } = {}
  for (const key in obj) {
    flipped[obj[key]] = key
  }
  return flipped
}
export function isNonLetterValue(value: string): boolean {
  return Object.values(NON_LETTER_CHAR_TO_NAME).includes(value);
}
export function isNumberValue(value: string): boolean {
  return Object.values(NUMBER_TO_NUMBER_NAME).includes(value);
}
export function isNumberKey(key: string): boolean {
  return Object.keys(NUMBER_TO_NUMBER_NAME).includes(key);
}
export function isNonLetterKey(key: string): boolean {
  return Object.keys(NON_LETTER_CHAR_TO_NAME).includes(key);
}

export const NON_LETTERS = Object.keys(NON_LETTER_CHAR_TO_NAME);
