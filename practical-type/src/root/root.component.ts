import {Component, inject} from '@angular/core';
import {RouterLink, RouterModule} from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {TimerService} from '../timer/timer.service';
import {KeyboardDataService} from '../keyboard-page/keyboard-data.service';
import {MatSnackBarModule, MatSnackBar, } from '@angular/material/snack-bar';
import {ScoresService} from '../scores/scores.service';
import {GlobalEventEmitter, SHOW_SNACKBAR} from '../eventz/global.event-emitter';

@Component({
  standalone: true,
  selector: 'practical-root',
  imports: [RouterModule, MatMenuModule, MatButtonModule, MatIconModule, RouterLink, MatSnackBarModule],
  templateUrl: './root.component.html',
  styleUrl: './root.component.scss'
})
export class RootComponent {
  constructor(
    private snackBar: MatSnackBar,
    public timerService: TimerService,
    private keyboardDataService: KeyboardDataService,
    private scoresService: ScoresService
  ) {
    GlobalEventEmitter.on(SHOW_SNACKBAR, (message: string) => {
      this.snackBar.open(message, 'Close', {
        duration: 4000,
      });
    });
  }


  getYear() {
    return new Date().getFullYear();
  }
  resetData() {
    this.keyboardDataService.resetTimeToPresses();
    this.keyboardDataService.refreshChart()
    this.scoresService.removeScores();
  }
}
