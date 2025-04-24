import * as d3 from 'd3';

export function insertLeftHand(leftHandGroup: d3.Selection<SVGGElement, unknown, null, undefined>) {

  let handHeight = +leftHandGroup.attr('height');
  let handWidth = +leftHandGroup.attr('width');

  // handHeight = handHeight * 1.2;
  // handWidth = handWidth * 1.2;

  const leftHand = leftHandGroup
    .append('g')
    .attr('id', 'left-hand')
    .attr('transform', `translate(0, 0)`);


  const FINGER_SPACING = handWidth / 10;
  const thumbLength = handHeight / 8;
  const thumbWidth = handHeight / 20;
  const thumbX = handWidth - thumbLength / 3;
  const thumbY = handHeight / 2;
  const thumbAngle = 45;
  addFinger(
    thumbAngle,
    thumbLength,
    'left-thumb',
    thumbWidth,
    thumbX,
    thumbY,
    leftHand
  );
  const pointerLength = handHeight / 4;
  const pointerWidth = handHeight / 20;
  const pointerX = handWidth - pointerLength / 3 - FINGER_SPACING;
  const pointerY = handHeight / 2 - FINGER_SPACING * 2;
  const pointerAngle = 4;
  addFinger(
    pointerAngle,
    pointerLength,
    'left-pointer',
    pointerWidth,
    pointerX,
    pointerY,
    leftHand
  );
  const middleLength = handHeight / 4 + FINGER_SPACING / 2;
  const middleWidth = handHeight / 20;
  const middleX = handWidth - middleLength / 3 - FINGER_SPACING * 2;
  const middleY = handHeight / 2 - FINGER_SPACING * 2.5;
  const middleAngle = 0;
  addFinger(
    middleAngle,
    middleLength,
    'left-middle',
    middleWidth,
    middleX,
    middleY,
    leftHand
  );
  const ringLength = handHeight / 4 + FINGER_SPACING / 2;
  const ringWidth = handHeight / 20;
  const ringX = handWidth - ringLength / 3 - FINGER_SPACING * 3;
  const ringY = handHeight / 2 - FINGER_SPACING * 2.2;
  const ringAngle = -4;
  addFinger(
    ringAngle,
    ringLength,
    'left-ring',
    ringWidth,
    ringX,
    ringY,
    leftHand
  );
  const pinkyLength = handHeight / 4;
  const pinkyWidth = handHeight / 20;
  const pinkyX = handWidth - pinkyLength / 3 - FINGER_SPACING * 4;
  const pinkyY = handHeight / 2 - FINGER_SPACING * 1.2;
  const pinkyAngle = -8;
  addFinger(
    pinkyAngle,
    pinkyLength,
    'left-pinky',
    pinkyWidth,
    pinkyX,
    pinkyY,
    leftHand
  );
}

function addFinger(
  fingerAngle: number = 0,
  fingerLength: number = 20,
  fingerName: string,
  fingerWidth: number = 20,
  fingerX: number = 0,
  fingerY: number = 0,
  hand: d3.Selection<SVGGElement, unknown, null, undefined>,
) {

  const finger = hand
    .append('g')
    .attr('id', fingerName)
    .attr('transform', `translate(${fingerX}, ${fingerY}) rotate(${fingerAngle})`);


  const FINGER_ROUNDING_X = 24;
  const FINGER_ROUNDING_Y = 20;
  finger
    .append('rect')
    .attr('width', fingerWidth)
    .attr('height', fingerLength)
    .attr('fill', 'red')
    .attr('rx', FINGER_ROUNDING_X)
    .attr('ry', FINGER_ROUNDING_Y)

  return finger;


}
