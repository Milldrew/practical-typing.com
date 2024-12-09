export const MARGIN = {top: 20, right: 20, bottom: 20, left: 20};
export const SVG_WIDTH = 800;
export const SVG_HEIGHT = 800;
export const BACKGROUND_COLOR = 'none';
export const YELLOW = 'rgb(255, 235, 59)'
export const COLOR = YELLOW;
export const KEY_WIDTH = 50;
export const SPACE_BETWEEN_KEYS = 5;
export const STROKE_WIDTH = .3;
export const TRANSLATE_KEYBOARD_X = 10;
export const FONT_SIZE = 24
export const FONT_FAMILY = 'Sans-serif';
export const FONT_WEIGHT = '300';
export const GRADIENT_COLOR = 'rgb(255, 235, 59)';

export const KEYBOARD_SHIFT_UP = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'"],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
];

export const KEYBOARD_SHIFT_DOWN = [
  ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'],
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?'],
];


export type KeyboardKeys = typeof KEYBOARD_SHIFT_UP | typeof KEYBOARD_SHIFT_DOWN;

/**
  * The amount of time it takes to press a key
  */
export type TimeToPress = number;
export type TimeToPressesAverage = {
  [key: string]: TimeToPress
}
export type TimeToPressesRaw = {
  [key: string]: TimeToPress[]
}

export const TIME_TO_PRESS: TimeToPressesAverage = {
  'a': .1,
  'b': .2,
  'c': .3,
  'd': .4,
  'e': .5,
  'f': .6,
  'g': .7,
  'h': .8,
  'i': .9,
  'j': .9,
  'k': .8,
  'l': .7,
  'm': .6,
  'n': .5,
  'o': .4,
  'p': .3,
  'q': .2,
  'r': .1,
  's': .1,
  't': .2,
  'u': .3,
  'v': .4,
  'w': .5,
  'x': .6,
  'y': .7,
  'z': .8,
  'one': .1,
  'two': .3,
  'three': .2,
  'four': .1,
  'five': .2,
  'six': .3,
  'seven': .4,
  'eight': .5,
  'nine': .6,
  'zero': .7,
}

