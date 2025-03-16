import {Component} from '@angular/core';
import {RouterLink, RouterModule} from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {TimerService} from '../timer/timer.service';
import {KeyboardDataService} from '../keyboard-page/keyboard-data.service';
import {ScoresService} from '../scores/scores.service';

@Component({
  standalone: true,
  selector: 'practical-root',
  imports: [RouterModule, MatMenuModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './root.component.html',
  styleUrl: './root.component.scss'
})
export class RootComponent {
  constructor(
    public timerService: TimerService,
    private keyboardDataService: KeyboardDataService,
    private scoresService: ScoresService
  ) {}


  getYear() {
    return new Date().getFullYear();
  }
  resetData() {
    this.keyboardDataService.resetTimeToPresses();
    this.keyboardDataService.refreshChart()
    this.scoresService.removeScores();
  }
}
