export const NON_LETTER_CHAR_TO_NAME: {
  [key: string]: string;
} = {
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

export const NON_LETTERS = Object.keys(NON_LETTER_CHAR_TO_NAME);
