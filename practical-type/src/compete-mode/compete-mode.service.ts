import {Injectable} from '@angular/core';
import {PRACTICAL_LETTERS, PRACTICAL_NUMBERS, PRACTICAL_SPECIAL_CHARACTERS} from '../text-controls/text-controls.constants';
import {GlobalEventEmitter, REMOVE_KEY_LISTENER, RESTART_RUN, SEND_COMPETE_MODE_RUN_DATA} from '../eventz/global.event-emitter';
import {HighScoresService} from '../high-scores/high-scores.service';
import {TimerService} from '../timer/timer.service';

@Injectable({
  providedIn: 'root'
})
export class CompeteModeService {

  constructor(
    private highScoreService: HighScoresService,
    private timerService: TimerService,

  ) {
    this.initalizeUsernameFromLocalStorage()
    GlobalEventEmitter.on(SEND_COMPETE_MODE_RUN_DATA, (wpm: number) => {
      console.log('SEND_COMPETE_MODE_RUN_DATA')
      const runData = {
        wpm,
        username: this.username
      }
      this.handleCompeteModeRunData(runData)
    })
  }
  handleCompeteModeRunData(runData: {username: string, wpm: number}) {
    console.table(runData)
    this.highScoreService.addScore(runData.username, runData.wpm)
    this.highScoreService.sortScores()


  }
  sendUpdatedRunDataToServer(runData: {username: string, wpm: number}) {
  }

  competitionLetters = PRACTICAL_NUMBERS + PRACTICAL_LETTERS + PRACTICAL_SPECIAL_CHARACTERS
  private username: string = ''

  setUsername(username: string) {
    this.username = username
    this.highScoreService.username = username
    saveUsernameInLocalStorage(username)
  }
  getUsername() {
    return this.username
  }
  initalizeUsernameFromLocalStorage() {
    this.username = getUsernameFromLocalStorage() || ''
    this.highScoreService.username = this.username
  }

  removeUsername() {
    this.username = ''
    this.highScoreService.username = ''
    localStorage.removeItem('username')
    GlobalEventEmitter.emit(REMOVE_KEY_LISTENER);
    this.timerService.stopTimer();
    GlobalEventEmitter.emit(RESTART_RUN)
  }
}

function saveUsernameInLocalStorage(username: string) {
  localStorage.setItem('username', username)
}

export function getUsernameFromLocalStorage() {
  return localStorage.getItem('username')
}
