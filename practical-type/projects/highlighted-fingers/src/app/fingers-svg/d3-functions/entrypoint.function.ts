import {addHandGroups} from "./add-hand-groups.function";
import {insertSVG} from "./create-svg.function";
import _ from 'lodash';
import {insertLeftHand} from "./insert-left-hand.function";
import {insertRightHand} from "./insert-right-hand.function";
import {addKeyboard} from "./add-keyboard.function";


export function fingersEntrypoint(hostElement: HTMLElement) {

  window.addEventListener('resize', _.debounce(() => {
    fingersEntrypoint(hostElement);
  }, 100));

  const svg = insertSVG(hostElement);
  console.log('adding hand group')
  const {leftHandGroup, rightHandGroup} =
    addHandGroups(svg);
  insertLeftHand(leftHandGroup);
  insertRightHand(rightHandGroup);
  //@ts-ignore
  addKeyboard(svg)
}


