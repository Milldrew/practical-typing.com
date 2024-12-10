import {Component} from '@angular/core';
import {TextControlsService} from './text-controls.service';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule} from '@angular/forms';
import {TimerService} from '../timer/timer.service';
import {MatButtonModule} from '@angular/material/button';
import {GlobalEventEmitter, RESTART_RUN} from '../eventz/global.event-emitter';
import {MatIconModule} from '@angular/material/icon';
import {KeyboardDataService} from '../keyboard-page/keyboard-data.service';

@Component({
  standalone: true,
  selector: 'practical-text-controls',
  imports: [MatSliderModule, FormsModule, MatButtonModule,
    MatIconModule
  ],
  templateUrl: './text-controls.component.html',
  styleUrl: './text-controls.component.scss'
})
export class TextControlsComponent {
  constructor(public textControls: TextControlsService,
    public timerService: TimerService,
    public keyboardService: KeyboardDataService
  ) {

  }
  ngOnInit() {
    //enter button listener
    document.addEventListener('keydown', (event) => {
      if (this.timerService.timerHasStarted) {
        return;
      }
      if (event.key === 'Enter') {
        GlobalEventEmitter.emit(RESTART_RUN);
      }
    });
  }
}
