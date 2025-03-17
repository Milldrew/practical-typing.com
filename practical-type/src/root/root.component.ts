import {Component, inject} from '@angular/core';
import {Router, RouterLink, RouterModule} from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {TimerService} from '../timer/timer.service';
import {KeyboardDataService} from '../keyboard-page/keyboard-data.service';
import {MatSnackBarModule, MatSnackBar, } from '@angular/material/snack-bar';
import {ScoresService} from '../scores/scores.service';
import {GlobalEventEmitter, SHOW_CELEBRATORY_ANIMATION, SHOW_SNACKBAR} from '../eventz/global.event-emitter';
import {CelebratoryAnimationComponent} from '../celebratory-animation/celebratory-animation.component';

@Component({
  standalone: true,
  selector: 'practical-root',
  imports: [RouterModule, MatMenuModule, MatButtonModule, MatIconModule, RouterLink, MatSnackBarModule,
    CelebratoryAnimationComponent,
  ],
  templateUrl: './root.component.html',
  styleUrl: './root.component.scss'
})
export class RootComponent {
  constructor(
    private snackBar: MatSnackBar,
    public timerService: TimerService,
    private keyboardDataService: KeyboardDataService,
    private scoresService: ScoresService,
    private router: Router
  ) {
    GlobalEventEmitter.on(SHOW_SNACKBAR, (message: string) => {
      this.snackBar.open(message, 'Close', {
        duration: 4000,
      });
    });
    GlobalEventEmitter.on(SHOW_CELEBRATORY_ANIMATION, () => {
      this.showCelebrationNow();
    })
  }


  isResetDataShowing = true;
  ngAfterViewChecked() {
    const url = this.router.url;
    if (url === '/') {

      this.isResetDataShowing = true;


    } else {
      this.isResetDataShowing = false
    }

  }

  isCelebrationShowing = false;
  showCelebrationNow() {
    this.isCelebrationShowing = true;
    setTimeout(() => {
      this.isCelebrationShowing = false;
    }, 3000);
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
