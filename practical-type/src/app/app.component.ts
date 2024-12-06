import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SpeedTypingTextDirective} from '../speed-typing-text/speed-typing-text.directive';
import {TimerComponent} from '../timer/timer.component';
import {TextControlsService} from '../text-controls/text-controls.service';
import {TextControlsComponent} from '../text-controls/text-controls.component';
import {TimerService} from '../timer/timer.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SpeedTypingTextDirective, TimerComponent, TextControlsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(
    public textControlsService: TextControlsService,
    public timerService: TimerService

  ) {}

}


