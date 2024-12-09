import {TimeToPresses} from './keyboard.constants';
export function keyFlareFunction(keyName: string, timeToPresses: TimeToPresses) {
  const max = getMaxTimeToPress(timeToPresses)
  const wpm = timeToPresses[keyName]

  if (!wpm) return String(0)
  const wpmAdjustment = timeToPresses[keyName] / max
  return String((wpmAdjustment - 1) * -1);
}



function getMaxTimeToPress(timeToPress: TimeToPresses) {
  return Math.max(...Object.values(timeToPress))
}

