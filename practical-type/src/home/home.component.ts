import {Component} from '@angular/core';
import {TimerComponent} from '../timer/timer.component';
import {TextControlsService} from '../text-controls/text-controls.service';
import {TextControlsComponent} from '../text-controls/text-controls.component';
import {TimerService} from '../timer/timer.service';
import {SpeedTypingTextDirective} from '../speed-typing-text/speed-typing-text.directive';
import {ScoresService} from '../scores/scores.service';
import {JsonPipe} from '@angular/common';


@Component({
  standalone: true,
  selector: 'practical-home',
  imports: [TimerComponent, TextControlsComponent, SpeedTypingTextDirective, JsonPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(
    public textControlsService: TextControlsService,
    public timerService: TimerService,
    public scoreService: ScoresService
  ) {}

}
