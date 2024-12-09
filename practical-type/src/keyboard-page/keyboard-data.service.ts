import {Injectable} from '@angular/core';
import {TimeToPressesAverage, TimeToPressesRaw} from '../../projects/keyboard/src/app/keyboard/keyboard.constants';
import {GlobalEventEmitter, SENDING_TIME_TO_PRESS_KEY_DATA} from '../eventz/global.event-emitter';
import {getFromLocalStorage, saveToLocalStorage} from '../scores/scores.service';

@Injectable({
  providedIn: 'root'
})
export class KeyboardDataService {
  timeToPressesAverage: TimeToPressesAverage = {}
  timeToPresses: TimeToPressesRaw = {}

  constructor() {
    this.timeToPresses = getFromLocalStorage('timeToPresses') || this.timeToPresses
    this.convertRawTimeToPressesToAverage()
    GlobalEventEmitter.on(SENDING_TIME_TO_PRESS_KEY_DATA, (timeToPress: number, key: string) => {
      // timeToPress = Number(timeToPress.toFixed(2))


      this.handleAddTimeToPresses(timeToPress, key)


    })
  }
  handleAddTimeToPresses(timeToPress: number, key: string) {
    if (Array.isArray(this.timeToPresses[key])) {
      this.timeToPresses[key].push(timeToPress)
    } else {
      this.timeToPresses[key] = [timeToPress]
    }
    this.convertRawTimeToPressesToAverage()
  }
  convertRawTimeToPressesToAverage() {
    this.timeToPressesAverage = {}
    for (let key in this.timeToPresses) {
      const rawList = this.timeToPresses[key]
      let sum = rawList.reduce((a, b) => a + b, 0)
      this.timeToPressesAverage[key] = sum / rawList.length
    }
  }

  timerTime = 0
  timerInterval: number;

  startTimer() {
    // @ts-ignore
    this.timerInterval =
      setInterval(() => {
        this.timerTime += .01
      }, 10)
  }

  getAverageTimeToPresses() {
  }

  hasSkippedFirstCharacter = false

  stopAndResetSendKeyData(key: string) {
    if (this.hasSkippedFirstCharacter) {
      GlobalEventEmitter.emit(SENDING_TIME_TO_PRESS_KEY_DATA, this.timerTime, key)
    }
    this.hasSkippedFirstCharacter = true
    this.stopTimer()
    this.resetTimer()
    this.startTimer()
  }
  stopTimer() {
    clearInterval(this.timerInterval)
  }
  resetTimer() {
    this.timerTime = 0
  }
  endAndClearTimer() {
    saveToLocalStorage('timeToPresses', this.timeToPresses)
    this.hasSkippedFirstCharacter = false
    this.stopTimer()
    this.resetTimer()
  }
}


