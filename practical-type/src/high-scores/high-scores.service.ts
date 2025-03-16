import {Injectable} from '@angular/core';
import {GlobalEventEmitter, SEND_COMPETE_MODE_RUN_DATA} from '../eventz/global.event-emitter';

@Injectable({
  providedIn: 'root'
})
export class HighScoresService {

  constructor() {
  }

  highScores: {
    name: string;
    score: number;
  }[] = [
    ];
  sortScores() {
    this.highScores.sort((a, b) => b.score - a.score);
  }
  addScore(name: string, score: number) {
    this.highScores.push({name, score});
    this.sortScores();
  }
}
