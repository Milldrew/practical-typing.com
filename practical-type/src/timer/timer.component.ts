import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {TimerService} from './timer.service';


@Component({
  standalone: true,
  selector: 'practical-timer',
  imports: [MatButtonModule],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent {
  constructor(public timerService: TimerService) {}

  ngAfterViewInit() {

  }
}
