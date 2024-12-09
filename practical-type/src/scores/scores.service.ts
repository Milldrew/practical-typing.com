import {Injectable} from '@angular/core';
import {GlobalEventEmitter, SEND_RUN_DATA} from '../eventz/global.event-emitter';

export type WordsPerMinute = number;
/**
  * each key is a run type
  * each value is an array of scores in words per minute
  */
export type Scores = {
  numbers: WordsPerMinute[],
  letters: WordsPerMinute[],
  specialCharacters: WordsPerMinute[],
}

@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  constructor() {

    this.recieveScore()

  }
  scores: {
    [key: string]: WordsPerMinute[]
  } = {

    }

  recieveScore() {

    GlobalEventEmitter.on(SEND_RUN_DATA, (runType, wordsPerMinute) => {
      if (runType && wordsPerMinute) {
        if (!this.scores[runType]) {
          this.scores[runType] = []
        }
        this.scores[runType].push(wordsPerMinute)
      }
      this.saveScores()
    })
  }



  saveScores() {
    saveToLocalStorage('scores', this.scores)
  }
  getScoresFromLocalStorage() {
    this.scores = getFromLocalStorage('scores') || this.scores
  }
  removeScores() {
    removeItemFromLocalStorage('scores')
    this.scores = {}
  }

}
export function saveToLocalStorage(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}
export function getFromLocalStorage(key: string) {

  const payload = localStorage.getItem(key)
  if (payload) {
    return JSON.parse(payload)
  }
  console.error('No data found in local storage for key:', key)
}
export function removeItemFromLocalStorage(key: string) {
  localStorage.removeItem(key)
}


