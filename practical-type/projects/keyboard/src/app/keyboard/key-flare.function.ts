import {TimeToPressesAverage} from './keyboard.constants';
export function keyFlareFunction(keyName: string, timeToPresses: TimeToPressesAverage) {
  const max = getMaxTimeToPress(timeToPresses)
  const wpm = timeToPresses[keyName]

  if (!wpm) return String(0)
  const wpmAdjustment = timeToPresses[keyName] / max
  return String((wpmAdjustment - 1) * -1);
}

function getMaxTimeToPress(timeToPress: TimeToPressesAverage) {
  return Math.max(...Object.values(timeToPress))
}

