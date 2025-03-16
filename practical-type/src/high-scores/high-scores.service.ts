import {Injectable} from '@angular/core';
import {GlobalEventEmitter, SEND_COMPETE_MODE_RUN_DATA, SHOW_SNACKBAR} from '../eventz/global.event-emitter';
import {io, Socket} from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class HighScoresService {
  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:3000');
    this.socket.emit('scores', {action: 'sync'});
    this.socket.on('connect', () => {
      console.log('Connected to server');
      this.socket.emit('scores', {action: 'sync'});
    });
    this.socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });
    this.socket.on('scores', (scores) => {
      console.log('scores', scores)
      if (scores.action === 'sync') {
        this.highScores = scores.data
        this.sortScores();
        if (scores.newScore) {
          GlobalEventEmitter.emit(SHOW_SNACKBAR, `${scores.newScore.name} just scored ${scores.newScore.score.toFixed(2)} words per minute!`);
        }
      }
    });
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
    this.socket.emit('scores', {name, score, action: 'add'});
    this.sortScores();
  }
}
