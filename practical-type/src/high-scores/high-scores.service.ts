import {Injectable} from '@angular/core';
import {GlobalEventEmitter, SEND_COMPETE_MODE_RUN_DATA, SHOW_CELEBRATORY_ANIMATION, SHOW_SNACKBAR} from '../eventz/global.event-emitter';
import {io, Socket} from 'socket.io-client';
import {getUsernameFromLocalStorage} from '../compete-mode/compete-mode.service';

@Injectable({
  providedIn: 'root'
})
export class HighScoresService {
  username: string = '';
  private socket: Socket;

  constructor() {
    const username = getUsernameFromLocalStorage()
    if (username) {
      this.username = username;
    }
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
          if (scores.newScore.name === this.username) {
            const usersHighScore = this.highScores.find(score => score.name === this.username);
            if (!usersHighScore) return;
            if (usersHighScore.score === scores.newScore.score) {
              GlobalEventEmitter.emit(SHOW_CELEBRATORY_ANIMATION);
            }
          }
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
    this.highScores = getOnlyUsersHighestScores(this.highScores);
    this.highScores.sort((a, b) => b.score - a.score);
  }
  addScore(name: string, score: number) {
    this.highScores.push({name, score});
    this.socket.emit('scores', {name, score, action: 'add'});
    this.sortScores();
  }
}

export function getOnlyUsersHighestScores(scores: {
  name: string;
  score: number;
}[]): {
  name: string;
  score: number;
}[] {
  const usersHighestScore = scores.reduce<{
    [name: string]: number;
  }>((acc, score) => {
    if (acc[score.name] === undefined) {
      acc[score.name] = score.score;
    } else if (acc[score.name] < score.score) {
      acc[score.name] = score.score;
    }
    return acc;
  }, {});
  return Object.entries(usersHighestScore).map(([name, score]) => ({name, score}));
}

