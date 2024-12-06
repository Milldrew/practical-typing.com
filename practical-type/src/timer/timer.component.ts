import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {TimerService} from './timer.service';
import {GlobalEventEmitter, RESTART_RUN} from '../eventz/global.event-emitter';
import {TextControlsService} from '../text-controls/text-controls.service';
import {JsonPipe} from '@angular/common';


@Component({
  standalone: true,
  selector: 'practical-timer',
  imports: [MatButtonModule, MatIconModule, JsonPipe],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent {
  constructor(public timerService: TimerService,
    public textService: TextControlsService
  ) {}

  ngAfterViewInit() {

  }

  handleRestartRun() {
    GlobalEventEmitter.emit(RESTART_RUN);
  }
}
