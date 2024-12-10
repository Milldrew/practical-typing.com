import {Injectable} from '@angular/core';
import {TimeToPressesAverage, TimeToPressesRaw} from '../../projects/keyboard/src/app/keyboard/keyboard.constants';
import {GlobalEventEmitter, SENDING_TIME_TO_PRESS_KEY_DATA} from '../eventz/global.event-emitter';
import {getFromLocalStorage, saveToLocalStorage} from '../scores/scores.service';
import {NON_LETTER_CHAR_TO_NAME, NUMBER_TO_NUMBER_NAME, handleValue} from '../speed-typing-text/speed-typing.constants';

@Injectable({
  providedIn: 'root'
})
export class KeyboardDataService {

  toggleKeyboard = false
  timeToPressesAverage: TimeToPressesAverage = {}
  timeToPresses: TimeToPressesRaw = {}
  resetTimeToPresses() {
    this.refreshChart()
    this.toggleKeyboard = true
    this.removeFromLocalStorage()
    this.timeToPresses = {}
    this.timeToPressesAverage = {}
    this.convertRawTimeToPressesToAverage()
  }
  hasAtleastTwelveEntries() {
    const keys = Object.keys(this.timeToPresses)
    if (keys.length < 12) {
      return false
    } else {
      return true
    }
  }
  getTheSlowestSixKeys() {
    if (!this.hasAtleastTwelveEntries()) return ''
    const keys = Object.keys(this.timeToPressesAverage)
    let sortedKeys = keys.sort((a, b) => {
      return this.timeToPressesAverage[b] - this.timeToPressesAverage[a]
    })

    sortedKeys = sortedKeys.map(key => {
      console.log(key, 'map start')
      key =
        handleValue(key)
      return key
    })
    return sortedKeys.slice(0, 6).join('')
  }

  refreshChart() {
    this.toggleKeyboard = true
    setTimeout(() => {
      this.toggleKeyboard = false
    }, 1)


  }
  removeFromLocalStorage() {
    localStorage.removeItem('timeToPresses')
  }

  constructor() {
    this.timeToPresses = getFromLocalStorage('timeToPresses') || this.timeToPresses
    this.convertRawTimeToPressesToAverage()
    GlobalEventEmitter.on(SENDING_TIME_TO_PRESS_KEY_DATA, (timeToPress: number, key: string) => {
      console.log('timeToPress', timeToPress)
      // timeToPress = Number(timeToPress.toFixed(2))

      Object.keys(NON_LETTER_CHAR_TO_NAME).includes(key) ? key = NON_LETTER_CHAR_TO_NAME[key] : key = key;
      Object.keys(NUMBER_TO_NUMBER_NAME).includes(key) ? key = NUMBER_TO_NUMBER_NAME[Number(key)] : key = key;


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
    this.timeToPressesAverage = {...this.timeToPressesAverage}
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
    } else {
      this.hasSkippedFirstCharacter = true
    }
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


