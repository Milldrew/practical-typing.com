

export function addKeyboard(svg: d3.Selection<SVGGElement, unknown, null, undefined>, resizeFactor: number, shiftIsDown: boolean, highlightedKeyName: string | null = null) {
  let keyboardWidth = 200;
  let keyboardHeight = 100;
  const SVG_WIDTH = +svg.attr('width');
  const SVG_HEIGHT = +svg.attr('height');

  let yTransform: number;
  const middleY = SVG_HEIGHT / 2;
  if (keyboardHeight > middleY) {
    yTransform = 0;
  } else {
    yTransform = middleY - keyboardHeight;
  }


  keyboardWidth *= resizeFactor * 4;
  keyboardHeight *= resizeFactor * 4;
  const keyboardGroup = svg
    .append('g')
    .attr('id', 'keyboard')
    .attr('transform', `translate(${SVG_WIDTH / 2 - keyboardWidth / 2}, ${yTransform})`);

  keyboardGroup
    .append('rect')
    .attr('width', keyboardWidth)
    .attr('height', keyboardHeight)
    .attr('fill', 'none')
    // .attr('stroke', 'white')
    .attr('stroke-width', 2);

  // Add keys to the keyboard
  const keyWidth = keyboardWidth / 10;
  const keyHeight = keyboardHeight / 4;


  if (shiftIsDown) {
    createAKeyboard(KEYBOARD_SHIFT_DOWN, keyboardGroup, resizeFactor,
      shiftIsDown,
      highlightedKeyName,
    );

  } else {
    createAKeyboard(KEYBOARD_SHIFT_UP, keyboardGroup, resizeFactor,
      shiftIsDown,
      highlightedKeyName,
    );

  }
}

import * as d3 from 'd3';

import {BACKGROUND_COLOR, COLOR, FONT_FAMILY, FONT_SIZE, KEY_WIDTH, KeyboardKeys, MARGIN, SPACE_BETWEEN_KEYS, STROKE_WIDTH, SVG_HEIGHT, SVG_WIDTH, TRANSLATE_KEYBOARD_X} from '../../../../../keyboard/src/app/keyboard/keyboard.constants';
import {NON_LETTER_CHAR_TO_NAME, NUMBER_TO_NUMBER_NAME} from '../../../../../../src/speed-typing-text/speed-typing.constants';
import {KEYBOARD_SHIFT_DOWN, KEYBOARD_SHIFT_UP} from '../../../../../keyboard/src/app/keyboard.constants';



function createKeyId(keyName: string) {
  const NON_LETTER_CHAR = Object.keys(NON_LETTER_CHAR_TO_NAME)
  const NUMBER = Object.keys(NUMBER_TO_NUMBER_NAME).map(Number);
  if (NON_LETTER_CHAR.includes(keyName)) {
    return `${NON_LETTER_CHAR_TO_NAME[keyName]}`;
  }
  if (NUMBER.includes(Number(keyName))) {
    return `${NUMBER_TO_NUMBER_NAME[Number(keyName)]}`;
  }
  return `${keyName}`;
}

function determineKeyFill(highlightedKeyName: string, keyName: string, shiftDownKey: string) {
  let keyColor: string;
  if (highlightedKeyName === keyName || highlightedKeyName === shiftDownKey) {
    keyColor = '#ffeb3b';
  } else {
    keyColor = 'none';
  }

  return keyColor;
}

export function createAKey(x: number, y: number, width: number, height: number, color: string, keyboardSVGG: d3.Selection<SVGGElement, unknown, null, any>, keyName: string, resizeFactor: number,
  keyFill: 'none' | '#ffeb3b' = 'none',
) {

  const keyG = keyboardSVGG.append('g')
    .attr('transform', `translate(${x}, ${y})`);


  const keyRect =
    keyG.append('rect')
      .attr('width', (KEY_WIDTH * resizeFactor))
      .attr('height', (KEY_WIDTH * resizeFactor))
      .style('fill', keyFill)
      // .style('fill-opacity', keyFlareValue)
      .style('stroke', 'white')
      .style('cursor', 'pointer')
      .style('stroke-opacity', 1)
      .style('stroke-width', STROKE_WIDTH)
      .attr('id', createKeyId(keyName))
      //round corners
      .attr('rx', 5)


  keyG.append('text')
    .attr('x', (KEY_WIDTH * resizeFactor) / 2)
    .attr('y', (KEY_WIDTH * resizeFactor) / 2)
    .attr('text-anchor', 'middle')
    .attr('alignment-baseline', 'middle')
    .style('fill', keyFill === 'none' ? 'white' : 'black')
    .style('font-size', `${FONT_SIZE * resizeFactor}px`)
    .style('font-family', FONT_FAMILY)
    .style('font-weight', '100')
    .text(keyName)
    .style('pointer-events', 'none')


}

export function createAKeyboard(keys: KeyboardKeys, keyboardSVGG: d3.Selection<SVGGElement, unknown, null, any>,
  resizeFactor: number, shiftIsDown: boolean, highlightedKeyName: string | null = null) {

  keys.forEach((row, rowIndex) => {
    row.forEach((key, keyIndex) => {

      const shiftDownKey = KEYBOARD_SHIFT_DOWN[rowIndex][keyIndex];
      createAKey(
        // ===================================X=INDEX===================================
        rowIndex * (16 *
          resizeFactor)
        + keyIndex * KEY_WIDTH * resizeFactor
        + ((SPACE_BETWEEN_KEYS
          * resizeFactor)
          * keyIndex + 1),
        // ===================================Y=INDEX===================================
        rowIndex * KEY_WIDTH
        * resizeFactor
        + ((rowIndex + 1) * SPACE_BETWEEN_KEYS
          * resizeFactor
        ),

        KEY_WIDTH,

        KEY_WIDTH,

        'rgb(255, 235, 59)',
        keyboardSVGG, key, resizeFactor,
        //@ts-ignore
        determineKeyFill(highlightedKeyName, key, shiftDownKey)

      )
    });
  })

}



