import * as d3 from 'd3';
import {KeyboardComponent} from './keyboard.component';
import {BACKGROUND_COLOR, COLOR, FONT_FAMILY, FONT_SIZE, KEY_WIDTH, KeyboardKeys, MARGIN, SPACE_BETWEEN_KEYS, STROKE_WIDTH, SVG_HEIGHT, SVG_WIDTH, TRANSLATE_KEYBOARD_X} from './keyboard.constants';
import {NON_LETTER_CHAR_TO_NAME, NUMBER_TO_NUMBER_NAME} from '../../../../../src/speed-typing-text/speed-typing.constants';
import {keyFlareFunction} from './key-flare.function';
import {handleKeyHover} from './key-hover.function';
export function keyboardSVG(this: KeyboardComponent, container: HTMLElement, svgStyleWidth = SVG_WIDTH, svgStyleHeight = SVG_HEIGHT) {
  const svg = d3.select(container).append('svg')
    .attr('width', SVG_WIDTH)
    .attr('height', SVG_HEIGHT)
    .style('background-color', BACKGROUND_COLOR);

  this.resizeFactor = svgStyleWidth / SVG_WIDTH;

  svg.style('width', svgStyleWidth)
    .style('height', svgStyleHeight)

  return svg;
}

export function createTheBaseGroups(this: KeyboardComponent) {
  this.baseGroup = this.svg.append('g')
    .attr('transform', `translate(${MARGIN.left * this.resizeFactor}, ${MARGIN.top * this.resizeFactor})`);

  this.topKeyboardGroup = this.baseGroup.append('g')
    .attr('transform', `translate(${TRANSLATE_KEYBOARD_X * this.resizeFactor}, ${100 * this.resizeFactor})`);

  this.bottomKeyboardGroup = this.baseGroup.append('g')
    .attr('transform', `translate(${TRANSLATE_KEYBOARD_X * this.resizeFactor}, ${400 * this.resizeFactor})`);
}

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

export function createAKey(this: KeyboardComponent, x: number, y: number, width: number, height: number, color: string, keyboardSVGG: d3.Selection<SVGGElement, unknown, null, any>, keyName: string) {
  const keyG = keyboardSVGG.append('g')
    .attr('transform', `translate(${x}, ${y})`)

  const keyFlareValue =
    keyFlareFunction(
      createKeyId(keyName),
      this.timeToPresses
    )


  const keyRect =
    keyG.append('rect')
      .attr('width', KEY_WIDTH * this.resizeFactor)
      .attr('height', KEY_WIDTH * this.resizeFactor)
      .style('fill', COLOR)
      .style('fill-opacity', keyFlareValue)
      .style('stroke', COLOR)
      .style('cursor', 'pointer')
      .style('stroke-opacity', 1)
      .style('stroke-width', STROKE_WIDTH)
      .attr('id', createKeyId(keyName))
      //round corners
      .attr('rx', 5)

  const textColor = Number(keyFlareValue) <= .5 ? COLOR : 'black';
  //add text to key
  keyG.append('text')
    .attr('x', (KEY_WIDTH * this.resizeFactor) / 2)
    .attr('y', (KEY_WIDTH * this.resizeFactor) / 2)
    .attr('text-anchor', 'middle')
    .attr('alignment-baseline', 'middle')
    .style('fill', textColor)
    .style('font-size', FONT_SIZE * this.resizeFactor)
    .style('font-family', FONT_FAMILY)
    .style('font-weight', '100')
    .text(keyName)
    .style('pointer-events', 'none')

  handleKeyHover.call(this, createKeyId(keyName), keyG)
}

export function createAKeyboard(this: KeyboardComponent, keys: KeyboardKeys, keyboardSVGG: d3.Selection<SVGGElement, unknown, null, any>) {

  keys.forEach((row, rowIndex) => {
    row.forEach((key, keyIndex) => {
      createAKey.call(this,
        rowIndex * (16 * this.resizeFactor) + keyIndex * KEY_WIDTH * this.resizeFactor + ((SPACE_BETWEEN_KEYS * this.resizeFactor) * keyIndex + 1),
        rowIndex * KEY_WIDTH * this.resizeFactor + ((rowIndex + 1) * (SPACE_BETWEEN_KEYS * this.resizeFactor)),
        KEY_WIDTH,
        KEY_WIDTH,
        'rgb(255, 235, 59)',
        keyboardSVGG, key);
    });
  });
}

export function addTitle(this: KeyboardComponent) {
  this.svg.append('text')
    .attr('x', (SVG_WIDTH / 2) * this.resizeFactor)
    .attr('y', 50 * this.resizeFactor)
    .attr('text-anchor', 'middle')
    .attr('alignment-baseline', 'middle')
    .style('fill', COLOR)
    .style('font-size', 30 * this.resizeFactor)
    .style('font-family', FONT_FAMILY)
    .style('font-weight', '100')
    .text('Time To Press')
}

