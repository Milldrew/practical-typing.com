import {Component} from '@angular/core';
import {SpeedTypingTextDirective} from '../speed-typing-text/speed-typing-text.directive';
import {TextControlsService} from '../text-controls/text-controls.service';
import {CompeteModeService} from './compete-mode.service';
import {TimerComponent} from '../timer/timer.component';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {GlobalEventEmitter, REMOVE_KEY_LISTENER} from '../eventz/global.event-emitter';
import {TimerService} from '../timer/timer.service';
import {FingersSvgComponent} from '../../projects/highlighted-fingers/src/app/fingers-svg/fingers-svg.component';

@Component({
  selector: 'practical-compete-mode',
  standalone: true,
  imports: [SpeedTypingTextDirective,
    MatButtonModule,
    TimerComponent,
    FormsModule,
    FingersSvgComponent
  ],
  templateUrl: './compete-mode.component.html',
  styleUrl: './compete-mode.component.scss'
})
export class CompeteModeComponent {
  constructor(
    public competeModeService: CompeteModeService,
    public timerService: TimerService
  ) {}
  ngOnInit() {
    if (!this.competeModeService.getUsername()) {
      GlobalEventEmitter.emit(REMOVE_KEY_LISTENER);
    }
  }

  tempUsername: string = ''
  startCompeteMode() {
    this.competeModeService.setUsername(this.tempUsername)

  }

}
