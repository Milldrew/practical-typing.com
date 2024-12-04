import {Component} from '@angular/core';
import {TimerService} from './timer.service';


@Component({
  standalone: true,
  selector: 'practical-timer',
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent {
  constructor(public timerService: TimerService) {}

  ngAfterViewInit() {
    this.timerService.start();

  }
}
