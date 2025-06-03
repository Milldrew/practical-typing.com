import {FingersConfig} from "./d3-functions/entrypoint.function";

export const SVG_BACKGROUND_COLOR = 'lightgray';

const SHIFT:
  FingersConfig['leftHand'] | FingersConfig['rightHand']
  = {
  finger: 'pinky',
  key: 'shift'
}

export const KEY_TO_FINGER_CONFIG_MAP: {
  [key: string]: FingersConfig
} = {
  a: {
    leftHand: {
      finger: 'pinky',
      key: 'a'
    },
    rightHand: null,
    specialCharacterName: 'a'
  },
  b: {
    leftHand: {
      finger: 'pointer',
      key: 'b'
    },
    rightHand: null,
    specialCharacterName: 'b'
  },
  c: {
    leftHand: {
      finger: 'middle',
      key: 'c'
    },
    rightHand: null,
    specialCharacterName: 'c'
  },
  d: {
    leftHand: {
      finger: 'middle',
      key: 'd'
    },
    rightHand: null,
    specialCharacterName: 'd'
  },
  e: {
    leftHand: {
      finger: 'middle',
      key: 'e'
    },
    rightHand: null,
    specialCharacterName: 'e'
  },
  f: {
    leftHand: {
      finger: 'pointer',
      key: 'f'
    },
    rightHand: null,
    specialCharacterName: 'f'
  },
  g: {
    leftHand: {
      finger: 'pointer',
      key: 'g'
    },
    rightHand: null,
    specialCharacterName: 'g'
  },
  h: {
    leftHand: null,
    rightHand: {
      finger: 'pointer',
      key: 'h'
    },
    specialCharacterName: 'h'
  },
  i: {
    leftHand: null,
    rightHand: {
      finger: 'middle',
      key: 'i'
    },
    specialCharacterName: 'i'
  },
  j: {
    leftHand: null,
    rightHand: {
      finger: 'pointer',
      key: 'j'
    },
    specialCharacterName: 'j'
  },
  k: {
    leftHand: null,
    rightHand: {
      finger: 'middle',
      key: 'k'
    },
    specialCharacterName: 'k'
  },
  l: {
    leftHand: null,
    rightHand: {
      finger: 'ring',
      key: 'l'
    },
    specialCharacterName: 'l'
  },
  m: {
    leftHand: null,
    rightHand: {
      finger: 'pointer',
      key: 'm'
    },
    specialCharacterName: 'm'
  },
  n: {
    leftHand: null,
    rightHand: {
      finger: 'pointer',
      key: 'n'
    },
    specialCharacterName: 'n'
  },
  o: {
    leftHand: null,
    rightHand: {
      finger: 'ring',
      key: 'o'
    },
    specialCharacterName: 'o'
  },
  p: {
    leftHand: null,
    rightHand: {
      finger: 'pinky',
      key: 'p'
    },
    specialCharacterName: 'p'
  },
  q: {
    leftHand: {
      finger: 'pinky',
      key: 'q'
    },
    rightHand: null,
    specialCharacterName: 'q'
  },
  r: {
    leftHand: {
      finger: 'pointer',
      key: 'r'
    },
    rightHand: null,
    specialCharacterName: 'r'
  },
  s: {
    leftHand: {
      finger: 'ring',
      key: 's'
    },
    rightHand: null,
    specialCharacterName: 's'
  },
  t: {
    rightHand: null,
    leftHand: {
      finger: 'pointer',
      key: 't'
    },
    specialCharacterName: 't'
  },
  u: {
    leftHand: null,
    rightHand: {
      finger: 'pointer',
      key: 'u'
    },
    specialCharacterName: 'u'
  },
  v: {
    leftHand: {
      finger: 'pointer',
      key: 'v'
    },
    rightHand: null,
    specialCharacterName: 'v'
  },
  w: {
    leftHand: {
      finger: 'ring',
      key: 'w'
    },
    rightHand: null,
    specialCharacterName: 'w'
  },
  x: {
    leftHand: {
      finger: 'ring',
      key: 'x'
    },
    rightHand: null,
    specialCharacterName: 'x'
  },
  y: {
    leftHand: null,
    rightHand: {
      finger: 'pointer',
      key: 'y'
    },
    specialCharacterName: 'y'
  },
  z: {
    leftHand: {
      finger: 'pinky',
      key: 'z'
    },
    rightHand: null,
    specialCharacterName: 'z'
  },
  A: {
    leftHand: {
      finger: 'pinky',
      key: 'A'
    },
    rightHand: {
      finger: 'pinky',
      key: 'shift'
    },
    specialCharacterName: 'A'
  },
  B: {
    leftHand: {
      finger: 'pointer',
      key: 'B'
    },
    rightHand: {
      finger: 'pinky',
      key: 'shift'
    },
    specialCharacterName: 'B'
  },
  C: {
    leftHand: {
      finger: 'middle',
      key: 'C'
    },
    rightHand: {
      finger: 'pinky',
      key: 'shift'
    },
    specialCharacterName: 'C'
  },
  D: {
    leftHand: {
      finger: 'middle',
      key: 'D'
    },
    rightHand: {
      finger: 'pinky',
      key: 'shift'
    },
    specialCharacterName: 'D'
  },
  E: {
    leftHand: {
      finger: 'middle',
      key: 'E'
    },
    rightHand: {
      finger: 'pinky',
      key: 'shift'
    },
    specialCharacterName: 'E'
  },
  F: {
    leftHand: {
      finger: 'pointer',
      key: 'F'
    },
    rightHand: {
      finger: 'pinky',
      key: 'shift'
    },
    specialCharacterName: 'F'
  },
  G: {
    leftHand: {
      finger: 'pointer',
      key: 'G'
    },
    rightHand: {
      finger: 'pinky',
      key: 'shift'
    },
    specialCharacterName: 'G'
  },
  H: {
    leftHand: SHIFT,
    rightHand: {
      finger: 'pointer',
      key: 'H'
    },
    specialCharacterName: 'H'
  },
  I: {
    leftHand: SHIFT,
    rightHand: {
      finger: 'middle',
      key: 'I'
    },
    specialCharacterName: 'I'
  },
  J: {
    leftHand: SHIFT,
    rightHand: {
      finger: 'pointer',
      key: 'J'
    },
    specialCharacterName: 'J'
  },
  K: {
    leftHand: SHIFT,
    rightHand: {
      finger: 'middle',
      key: 'K'
    },
    specialCharacterName: 'K'
  },
  //ERROR
  L: {
    leftHand: SHIFT,
    rightHand: {
      finger: 'ring', // Changed from 'pointer' to 'ring' to match lowercase 'l'
      key: 'L'
    },
    specialCharacterName: 'L'
  },
  M: {
    leftHand: SHIFT,
    rightHand: {
      finger: 'pointer',
      key: 'M'
    },
    specialCharacterName: 'M'
  },
  N: {
    leftHand: SHIFT,
    rightHand: {
      finger: 'pointer',
      key: 'N'
    },
    specialCharacterName: 'N'
  },
  O: {
    leftHand: SHIFT,
    rightHand: {
      finger: 'ring', // Changed from 'pointer' to 'ring' to match lowercase 'o'
      key: 'O'
    },
    specialCharacterName: 'O'
  },
  P: {
    leftHand: SHIFT,
    rightHand: {
      finger: 'pinky', // Changed from 'pointer' to 'pinky' to match lowercase 'p'
      key: 'P'
    },
    specialCharacterName: 'P'
  },


  Q: {
    leftHand: {
      finger: 'pinky',
      key: 'Q'
    },
    rightHand: {
      finger: 'pinky',
      key: 'shift'
    },
    specialCharacterName: 'Q'
  },
  R: {
    leftHand: {
      finger: 'pointer', // Changed from 'pinky' to 'pointer' to match lowercase 'r'
      key: 'R'
    },
    rightHand: {
      finger: 'pinky',
      key: 'shift'
    },
    specialCharacterName: 'R'
  },
  S: {
    leftHand: {
      finger: 'middle',
      key: 'S'
    },
    rightHand: {
      finger: 'pinky',
      key: 'shift'
    },
    specialCharacterName: 'S'
  },
  T: {
    leftHand: {
      finger: 'pointer', // Added leftHand configuration to match lowercase 't'
      key: 'T'
    },
    rightHand: {
      finger: 'pinky', // Added shift key
      key: 'shift'
    },
    specialCharacterName: 'T'
  },
  U: {
    leftHand: SHIFT, // Added shift key
    rightHand: {
      finger: 'middle', // Kept as 'middle' to match lowercase 'u'
      key: 'U'
    },
    specialCharacterName: 'U'
  },
  V: {
    leftHand: {
      finger: 'pointer', // Changed from 'middle' to 'pointer' to match lowercase 'v'
      key: 'V'
    },
    rightHand: SHIFT, // Added shift key
    specialCharacterName: 'V'
  },
  W: {
    leftHand: {
      finger: 'ring', // Changed from 'pinky' to 'ring' to match lowercase 'w'
      key: 'W'
    },
    rightHand: SHIFT, // Added shift key
    specialCharacterName: 'W'
  },
  X: {
    leftHand: {
      finger: 'ring',
      key: 'X'
    },
    rightHand: SHIFT,
    specialCharacterName: 'X'
  },
  Y: {
    leftHand: SHIFT,
    rightHand: {
      finger: 'pointer',
      key: 'Y'
    },
    specialCharacterName: 'Y'
  },
  Z: {
    leftHand: {
      finger: 'pinky',
      key: 'Z'
    },
    rightHand: {
      finger: 'pinky',
      key: 'shift'
    },
    specialCharacterName: 'Z'
  },
  '&': {
    leftHand: SHIFT,
    rightHand: {
      finger: 'pointer',
      key: '&'
    },
    specialCharacterName: 'ampersand'
  },
  '*': {
    leftHand: SHIFT,
    rightHand: {
      finger: 'pointer',
      key: '*'
    },
    specialCharacterName: 'asterisk'
  },
  '@': {
    leftHand: {
      finger: 'ring',
      key: '@'
    },
    rightHand: SHIFT,
    specialCharacterName: 'at'
  },
  "\\": {
    rightHand: {
      finger: 'pinky',
      key: '\\'
    },
    leftHand: null,
    specialCharacterName: 'backslash'
  },
  '`': {
    leftHand: {
      finger: 'pinky',
      key: '`'
    },
    rightHand: null,
    specialCharacterName: 'backtick'
  },
  '^': {
    leftHand: {
      finger: 'pointer',
      key: '^'
    },
    rightHand: SHIFT,
    specialCharacterName: 'caret'
  },
  ":": {
    rightHand: {
      finger: 'pinky',
      key: ':'
    },
    leftHand: SHIFT,
    specialCharacterName: 'colon'
  },
  ',': {
    rightHand: {
      finger: 'middle',
      key: ','
    },
    leftHand: null,
    specialCharacterName: 'comma'
  },
  '$': {
    leftHand: {
      finger: 'pointer',
      key: '$'
    },
    rightHand: SHIFT,
    specialCharacterName: 'dollar'
  },
  '"': {
    leftHand: {
      finger: 'pinky',
      key: '"'
    },
    rightHand: SHIFT,
    specialCharacterName: 'double quote'
  },
  '=': {
    leftHand: null,
    rightHand: {
      finger: 'pinky',
      key: '='
    },
    specialCharacterName: 'equals'
  },
  '!': {
    leftHand: {
      finger: 'pinky',
      key: '!'
    },
    rightHand: SHIFT,
    specialCharacterName: 'exclamation'
  },
  '/': {
    rightHand: {
      finger: 'pinky',
      key: '/'
    },
    leftHand: null,
    specialCharacterName: 'forward slash'
  },
  '>': {
    leftHand: SHIFT,
    rightHand: {
      finger: 'ring',
      key: '>'
    },
    specialCharacterName: 'greater than'
  },
  '#': {
    leftHand: {
      finger: 'middle',
      key: '#'
    },
    rightHand: SHIFT,
    specialCharacterName: 'hash'
  },
  '{': {
    leftHand: SHIFT,
    rightHand: {
      finger: 'pinky',
      key: '{'
    },
    specialCharacterName: 'left curly bracket'
  },
  '[': {
    leftHand: null,
    rightHand: {
      finger: 'pinky',
      key: '['
    },
    specialCharacterName: 'left bracket'
  },
  '(': {
    leftHand: SHIFT,
    rightHand: {
      finger: 'ring',
      key: '('
    },
    specialCharacterName: 'left parenthesis'
  },
  '<': {
    rightHand: {
      finger: 'middle',
      key: '<'
    },
    leftHand: SHIFT,
    specialCharacterName: 'less than'
  },
  '-': {
    rightHand: {
      finger: 'ring',
      key: '-'
    },
    leftHand: null,
    specialCharacterName: 'minus'
  },
  '%': {
    leftHand: {
      finger: 'pointer',
      key: '%'
    },
    rightHand: SHIFT,
    specialCharacterName: 'percent'
  },
  '.': {
    rightHand: {
      finger: 'ring',
      key: '.'
    },
    leftHand: null,
    specialCharacterName: 'period'
  },
  '+': {
    rightHand: {
      finger: 'pinky',
      key: '+'
    },
    leftHand: SHIFT,
    specialCharacterName: 'plus'
  },
  '?': {
    leftHand: SHIFT,
    rightHand: {
      finger: 'pinky',
      key: '?'
    },
    specialCharacterName: 'question mark'
  },
  '}': {
    rightHand: {
      finger: 'pinky',
      key: '}'
    },
    leftHand: SHIFT,
    specialCharacterName: 'right curly bracket'
  },
  ']': {
    rightHand: {
      finger: 'pinky',
      key: ']'
    },
    leftHand: null,
    specialCharacterName: 'right bracket'
  },
  ')': {
    rightHand: {
      finger: 'pinky',
      key: ')'
    },
    leftHand: SHIFT,
    specialCharacterName: 'right parenthesis'
  },
  ';': {
    rightHand: {
      finger: 'ring',
      key: ';'
    },
    leftHand: null,
    specialCharacterName: 'semicolon'
  },
  "'": {
    leftHand: null,
    rightHand: {
      finger: 'pinky',
      key: "'"
    },
    specialCharacterName: 'single quote'
  },
  '~': {
    leftHand: {
      finger: 'pinky',
      key: '~'
    },
    rightHand: SHIFT,
    specialCharacterName: 'tilde'
  },
  '_': {
    rightHand: {
      finger: 'ring',
      key: '_'
    },
    leftHand: SHIFT,
    specialCharacterName: 'underscore'
  },
  '|': {
    leftHand: null,
    rightHand: {
      finger: 'pinky',
      key: '|'
    },
    specialCharacterName: 'vertical bar'
  },
  '1': {
    leftHand: {
      finger: 'pinky',
      key: '1'
    },
    rightHand: null,
    specialCharacterName: '1'
  },
  '2': {
    leftHand: {
      finger: 'ring',
      key: '2'
    },
    rightHand: null,
    specialCharacterName: '2'
  },
  '3': {
    leftHand: {
      finger: 'middle',
      key: '3'
    },
    rightHand: null,
    specialCharacterName: '3'
  },
  '4': {
    leftHand: {
      finger: 'pointer',
      key: '4'
    },
    rightHand: null,
    specialCharacterName: '4'
  },
  '5': {
    leftHand: {
      finger: 'pointer',
      key: '5'
    },
    rightHand: null,
    specialCharacterName: '5'
  },
  '6': {
    leftHand: {
      finger: 'pointer',
      key: '6'
    },
    rightHand: null,
    specialCharacterName: '6'
  },
  7: {
    rightHand: {
      finger: 'pointer',
      key: '7'
    },
    leftHand: null,
    specialCharacterName: '7'
  }
  ,
  '8': {
    rightHand: {
      finger: 'middle',
      key: '8'
    },
    leftHand: null,
    specialCharacterName: '8'
  },
  '9': {
    rightHand: {
      finger: 'ring',
      key: '9'
    },
    leftHand: null,
    specialCharacterName: '9'
  },
  '0': {
    rightHand: {
      finger: 'pinky',
      key: '0'
    },
    leftHand: null,
    specialCharacterName: '0'
  },
}



