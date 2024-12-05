import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {TimerService} from './timer.service';


@Component({
  standalone: true,
  selector: 'practical-timer',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent {
  constructor(public timerService: TimerService) {}

  ngAfterViewInit() {

  }

}
