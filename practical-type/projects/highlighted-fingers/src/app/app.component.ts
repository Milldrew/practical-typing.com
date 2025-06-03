import {Component, ElementRef} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FingersSvgComponent} from './fingers-svg/fingers-svg.component';
import {fingersEntrypoint} from './fingers-svg/d3-functions/entrypoint.function';
import {KEY_TO_FINGER_CONFIG_MAP} from './fingers-svg/finger-svg.constants';
import {GlobalEventEmitter, SEND_CURRENT_KEY_TO_FINGERS_COMPONENT} from '../../../../src/eventz/global.event-emitter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FingersSvgComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'highlighted-fingers';
  constructor(private hostElement: ElementRef) {}

  ngOnInit() {
    window.addEventListener('keydown', (event) => {
      console.log(event)
      const key = event.key
      GlobalEventEmitter.emit(SEND_CURRENT_KEY_TO_FINGERS_COMPONENT, key
      );
    })

  }
}
