import {Component} from '@angular/core';
import {TextControlsService} from './text-controls.service';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule} from '@angular/forms';

@Component({
  standalone: true,
  selector: 'practical-text-controls',
  imports: [MatSliderModule, FormsModule],
  templateUrl: './text-controls.component.html',
  styleUrl: './text-controls.component.scss'
})
export class TextControlsComponent {
  constructor(public textControls: TextControlsService) {}
}
