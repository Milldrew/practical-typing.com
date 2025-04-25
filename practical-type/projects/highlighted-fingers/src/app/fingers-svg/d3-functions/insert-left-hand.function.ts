import * as d3 from 'd3';
import {FingerName} from './entrypoint.function';

export function fingerSpacing(handHeight: number) {
  return handHeight / 10;
}

export function insertLeftHand(leftHandGroup: d3.Selection<SVGGElement, unknown, null, undefined>, highlightedFinger: FingerName | null = null) {

  function getFingerColor(fingerName: string) {
    if (!highlightedFinger) return 'none';
    if (fingerName.includes(highlightedFinger)) {
      return '#ffeb3b';
    } else {
      return 'none';
    }
  }
  let handHeight = +leftHandGroup.attr('height');
  let handWidth = +leftHandGroup.attr('width');

  // handHeight = handHeight * 1.2;
  // handWidth = handWidth * 1.2;

  const leftHand = leftHandGroup
    .append('g')
    .attr('id', 'left-hand')
  // .attr('transform', `translate(${0}, ${handHeight})`)



  const thumbLength = handHeight / 8;
  const thumbWidth = handHeight / 20;
  const thumbX = fingerX(fingerSpacing(handHeight) * 4);
  const thumbY = fingerY(handHeight, thumbLength);
  const thumbAngle = 45;
  addFinger(
    thumbAngle,
    thumbLength,
    'left-thumb',
    thumbWidth,
    thumbX,
    thumbY,
    leftHand,
    getFingerColor('thumb'),
  );
  const pointerLength = handHeight / 4;
  const pointerWidth = handHeight / 20;
  const pointerX = fingerX(fingerSpacing(handHeight) * 3);
  const pointerY = fingerY(handHeight, pointerLength, fingerSpacing(handHeight) / 2);
  const pointerAngle = 4;
  addFinger(
    pointerAngle,
    pointerLength,
    'left-pointer',
    pointerWidth,
    pointerX,
    pointerY,
    leftHand,
    getFingerColor('pointer'),
  );
  const middleLength = handHeight / 4 + fingerSpacing(handHeight) / 2;
  const middleWidth = handHeight / 20;
  const middleX = fingerX(fingerSpacing(handHeight) * 2);
  const middleY = fingerY(handHeight, middleLength, fingerSpacing(handHeight) / 2);
  const middleAngle = 0;
  addFinger(
    middleAngle,
    middleLength,
    'left-middle',
    middleWidth,
    middleX,
    middleY,
    leftHand,
    getFingerColor('middle'),

  );
  const ringLength = handHeight / 4 + fingerSpacing(handHeight) / 2;
  const ringWidth = handHeight / 20;
  const ringX = fingerX(fingerSpacing(handHeight))
  const ringY = fingerY(handHeight, ringLength, fingerSpacing(handHeight) / 3);
  const ringAngle = -4;
  addFinger(
    ringAngle,
    ringLength,
    'left-ring',
    ringWidth,
    ringX,
    ringY,
    leftHand,
    getFingerColor('ring'),

  );
  const pinkyLength = handHeight / 4;
  const pinkyWidth = handHeight / 20;
  const pinkyX = fingerX()
  const pinkyY = fingerY(handHeight, pinkyLength);
  const pinkyAngle = -8;
  addFinger(
    pinkyAngle,
    pinkyLength,
    'left-pinky',
    pinkyWidth,
    pinkyX,
    pinkyY,
    leftHand,
    getFingerColor('pinky'),
  );
}
function fingerX(fingerSpacing = 0) {
  return fingerSpacing;
}

export function fingerY(handHeight: number, fingerLength: number, handArcHeight = 0) {
  return handHeight - fingerLength - handArcHeight;
}

export function addFinger(
  fingerAngle: number = 0,
  fingerLength: number = 20,
  fingerName: string,
  fingerWidth: number = 20,
  fingerX: number = 0,
  fingerY: number = 0,
  hand: d3.Selection<SVGGElement, unknown, null, undefined>,
  fillColor: string = 'none',
) {

  const finger = hand
    .append('g')
    .attr('id', fingerName)
    .attr('transform', `translate(${fingerX}, ${fingerY}) rotate(${fingerAngle})`);


  const FINGER_ROUNDING_X = fingerWidth / 2;
  const FINGER_ROUNDING_Y = fingerWidth / 2.2;
  finger
    .append('rect')
    .attr('width', fingerWidth)
    .attr('height', fingerLength)
    .attr('fill', fillColor)
    .attr('rx', FINGER_ROUNDING_X)
    .attr('ry', FINGER_ROUNDING_Y)
    .style('stroke', 'white');


  return finger;

}

