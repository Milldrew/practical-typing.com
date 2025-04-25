import {Component} from '@angular/core';
import {KeyboardComponent} from '../../projects/keyboard/src/app/keyboard/keyboard.component';
import {KeyboardDataService} from './keyboard-data.service';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FingersSvgComponent} from '../../projects/highlighted-fingers/src/app/fingers-svg/fingers-svg.component';

@Component({
  selector: 'practical-keyboard-page',
  standalone: true,
  imports: [KeyboardComponent, MatButtonModule, MatButtonModule,
    MatIconModule,
    FingersSvgComponent
  ],
  templateUrl: './keyboard-page.component.html',
  styleUrl: './keyboard-page.component.scss'
})
export class KeyboardPageComponent {
  constructor(
    public keyboardService: KeyboardDataService
  ) {

  }
  ngAfterViewInit() {
    this.keyboardService.refreshChart()
  }

}
