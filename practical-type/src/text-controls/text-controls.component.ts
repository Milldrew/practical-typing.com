import {Component} from '@angular/core';
import {TextControlsService} from './text-controls.service';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule} from '@angular/forms';
import {TimerService} from '../timer/timer.service';
import {MatButtonModule} from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'practical-text-controls',
  imports: [MatSliderModule, FormsModule, MatButtonModule
  ],
  templateUrl: './text-controls.component.html',
  styleUrl: './text-controls.component.scss'
})
export class TextControlsComponent {
  constructor(public textControls: TextControlsService,
    public timerService: TimerService
  ) {}
}
