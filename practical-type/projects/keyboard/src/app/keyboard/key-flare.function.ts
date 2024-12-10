import {TimeToPressesAverage} from './keyboard.constants';
export function keyFlareFunction(keyName: string, timeToPresses: TimeToPressesAverage) {
  const max = getMaxTimeToPress(timeToPresses)
  const median = getMedianTimeToPress(timeToPresses)
  const wpm = timeToPresses[keyName]
  const min = getMinTimeToPress(timeToPresses)
  if (!wpm) return String(0)
  const wpmAdjustment = timeToPresses[keyName] / ((median + max) / 2)
  // const wpmAdjustment = timeToPresses[keyName] / median
  return String((wpmAdjustment - 1) * -1);
}

function getMaxTimeToPress(timeToPress: TimeToPressesAverage) {
  return Math.max(...Object.values(timeToPress))
}

function getMinTimeToPress(timeToPress: TimeToPressesAverage) {
  return Math.min(...Object.values(timeToPress))
}

function getMedianTimeToPress(timeToPress: TimeToPressesAverage) {
  return Object.values(timeToPress).sort()[Math.floor(Object.values(timeToPress).length / 2)]
}
