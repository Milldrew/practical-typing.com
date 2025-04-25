import * as d3 from 'd3';
import {addHandGroups} from "./add-hand-groups.function";
import {insertSVG} from "./create-svg.function";
import _ from 'lodash';
import {insertLeftHand} from "./insert-left-hand.function";
import {insertRightHand} from "./insert-right-hand.function";
import {addKeyboard} from "./add-keyboard.function";
import {GlobalEventEmitter, SEND_CURRENT_KEY_TO_FINGERS_COMPONENT} from '../../../../../../src/eventz/global.event-emitter';


export type FingerName = 'thumb' | 'pointer' | 'middle' | 'ring' | 'pinky';

export type FingersConfig = {
  leftHand: {
    finger: FingerName;
    key: string;
  } | null,
  rightHand: {
    finger: FingerName;
    key: string;
  } | null
  specialCharacterName: string | null;
}

const MOCK_COMMA: FingersConfig = {
  leftHand: null,
  rightHand: {
    finger: 'middle',
    key: ','
  },
  specialCharacterName: 'comma'
}

const MOCK_J: FingersConfig = {
  leftHand: null,
  rightHand: {
    finger: 'pointer',
    key: 'j'
  },
  specialCharacterName: 'j'
}
const MOCK_F: FingersConfig = {
  leftHand: {
    finger: 'pointer',
    key: 'f'
  },
  rightHand: null,
  specialCharacterName: 'f'
}
const MOCK_EXCLAMATION: FingersConfig = {
  rightHand: {
    finger: 'pinky',
    key: 'shift'
  },
  leftHand: {
    finger: 'pinky',
    key: '!'
  },
  specialCharacterName: 'exclamation'
}


let currentConfig: FingersConfig;

export function fingersEntrypoint(hostElement: HTMLElement,
  fingersConfig: FingersConfig) {
  currentConfig = fingersConfig;

  window.addEventListener('resize', _.debounce(() => {
    //@ts-ignore
    fingersEntrypoint(hostElement, currentConfig);
  }, 100));



  const svg = insertSVG(hostElement);

  const {leftHandGroup, rightHandGroup} =
    addHandGroups(svg);
  if (fingersConfig.leftHand) {
    addTargetKeyNameToLeftHand(fingersConfig.leftHand.key, leftHandGroup);

  }
  if (fingersConfig.rightHand) {
    addTargetKeyNameToRightHand(fingersConfig.rightHand.key, rightHandGroup);
  }
  const leftFinger = !fingersConfig.leftHand ? null : fingersConfig.leftHand.finger;
  const rightFinger = !fingersConfig.rightHand ? null : fingersConfig.rightHand.finger;
  insertLeftHand(leftHandGroup, leftFinger);
  insertRightHand(rightHandGroup, rightFinger);

  const svgWidth = +svg.attr('width');
  const svgHeight = +svg.attr('height');

  const resizeFactor = Math.min(svgWidth / 1000, svgHeight / 1000);

  let highLightedKey: string;
  if (fingersConfig.leftHand && fingersConfig.rightHand) {
    if (fingersConfig.leftHand.key === 'shift') {
      highLightedKey = fingersConfig.rightHand.key;
    } else if (fingersConfig.rightHand.key === 'shift') {
      highLightedKey = fingersConfig.leftHand.key;
    }
  } else if (fingersConfig.leftHand) {
    highLightedKey = fingersConfig.leftHand.key;

  } else {
    //@ts-ignore
    highLightedKey = fingersConfig.rightHand.key;
  }

  let shiftIsDown: boolean;

  if (
    (currentConfig.leftHand && (currentConfig.leftHand.key === 'shift')) ||
    (currentConfig.rightHand && (currentConfig.rightHand.key === 'shift'))
  ) {
    shiftIsDown = true;
  } else {
    shiftIsDown = false;
  }


  //@ts-ignore
  addKeyboard(svg, resizeFactor,
    shiftIsDown,
    //@ts-ignore
    highLightedKey,
  );
  if (fingersConfig.specialCharacterName) {
    addSpecialCharacterName(fingersConfig.specialCharacterName, svg);
  }
}


function addTargetKeyNameToRightHand(keyName: string, rightHandGroup: d3.Selection<SVGGElement, unknown, null, undefined>) {
  const rightHandWidth = rightHandGroup.attr('width');
  const rightHandHeight = rightHandGroup.attr('height');
  const textX = parseFloat(rightHandWidth) - parseFloat(rightHandWidth) / 5;
  const textY = parseFloat(rightHandHeight) / 2;
  const text = rightHandGroup.append('text')
    .attr('x', textX)
    .attr('y', textY)
    .attr('text-anchor', 'middle')
    .attr('dominant-baseline', 'middle')
    .attr('font-size', '40px')
    .attr('fill', 'white')
    .text(keyName);

}

function addTargetKeyNameToLeftHand(keyName: string, leftHandGroup: d3.Selection<SVGGElement, unknown, null, undefined>) {
  const leftHandWidth = leftHandGroup.attr('width');
  const leftHandHeight = leftHandGroup.attr('height');
  const textX = parseFloat(leftHandWidth) / 5;
  const textY = parseFloat(leftHandHeight) / 2;
  const text = leftHandGroup.append('text')
    .attr('x', textX)
    .attr('y', textY)
    .attr('text-anchor', 'middle')
    .attr('dominant-baseline', 'middle')
    .attr('font-size', '40px')
    .attr('fill', 'white')
    .text(keyName);

}

/**
  * Add the special character name to the bottom middle of the SVG
  */
function addSpecialCharacterName(
  name: string,
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,

) {

  const svgWidth = +svg.attr('width');
  const svgHeight = +svg.attr('height');

  const textX = svgWidth / 2;
  const textY = svgHeight - 50;

  svg.append('text')
    .attr('x', textX)
    .attr('y', textY)
    .attr('text-anchor', 'middle')
    .attr('dominant-baseline', 'middle')
    .attr('font-size', '40px')
    .attr('fill', 'white')
    .text(name);


}
