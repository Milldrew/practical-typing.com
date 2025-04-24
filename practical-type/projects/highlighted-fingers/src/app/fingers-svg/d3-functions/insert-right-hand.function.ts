import * as d3 from 'd3';
import {fingerSpacing, addFinger, fingerY} from './insert-left-hand.function';

export function insertRightHand(rightHandGroup: d3.Selection<SVGGElement, unknown, null, undefined>) {
  let handHeight = +rightHandGroup.attr('height');
  let handWidth = +rightHandGroup.attr('width');

  // handHeight = handHeight * 1.2;
  // handWidth = handWidth * 1.2;

  const rightHand = rightHandGroup
    .append('g')
    .attr('id', 'right-hand')
  // .attr('transform', `translate(${0}, ${handHeight})`)

  const pinkyX = fingerX(handWidth, fingerSpacing(handHeight))
  const pinkyY = fingerY(handHeight, handHeight / 4);
  const pinkyAngle = 10;
  const pinkyWidth = handHeight / 20;
  const pinkyLength = handHeight / 4;
  addFinger(
    pinkyAngle,
    pinkyLength,
    'right-pinky',
    pinkyWidth,
    pinkyX,
    pinkyY,
    rightHand
  );

  const ringFingerX = fingerX(handWidth, fingerSpacing(handHeight) * 2);
  const ringFingerY = fingerY(handHeight, handHeight / 4 + fingerSpacing(handHeight) / 2, fingerSpacing(handHeight) / 3);
  const ringFingerAngle = 6;
  const ringFingerWidth = handHeight / 20;

  const ringFingerLength = handHeight / 4 + fingerSpacing(handHeight) / 2;
  addFinger(
    ringFingerAngle,
    ringFingerLength,
    'right-ring',
    ringFingerWidth,
    ringFingerX,
    ringFingerY,
    rightHand
  );

  const middleLength = handHeight / 4 + fingerSpacing(handHeight) / 2;
  const middleWidth = handHeight / 20;
  const middleX = fingerX(handWidth, fingerSpacing(handHeight) * 3);
  const middleY = fingerY(handHeight, middleLength, fingerSpacing(handHeight) / 2);
  const middleAngle = 2;
  addFinger(
    middleAngle,
    middleLength,
    'right-middle',
    middleWidth,
    middleX,
    middleY,
    rightHand
  );

  const pointerLength = handHeight / 4;
  const pointerWidth = handHeight / 20;
  const pointerFingerX = fingerX(handWidth, fingerSpacing(handHeight) * 4);
  const pointerFingerY = fingerY(handHeight, pointerLength, fingerSpacing(handHeight) / 2)
  const pointerFingerAngle = -2;
  addFinger(
    pointerFingerAngle,
    pointerLength,
    'right-pointer',
    pointerWidth,
    pointerFingerX,
    pointerFingerY,
    rightHand
  );

  const thumbLength = handHeight / 8;
  const thumbWidth = handHeight / 20;
  const thumbX = fingerX(handWidth, fingerSpacing(handHeight) * 5);
  const thumbY = fingerY(handHeight, thumbLength) + 10;
  const thumbAngle = -45
  addFinger(
    thumbAngle,
    thumbLength,
    'right-thumb',
    thumbWidth,
    thumbX,
    thumbY,
    rightHand
  );



}

function fingerX(handWidth: number, fingerSpacing: number) {
  return handWidth - fingerSpacing;
}

