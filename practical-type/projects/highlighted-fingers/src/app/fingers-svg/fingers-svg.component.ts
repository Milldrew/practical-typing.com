import {Component, ElementRef} from '@angular/core';
import {insertSVG} from './d3-functions/create-svg.function';
import {fingersEntrypoint} from './d3-functions/entrypoint.function';
import {GlobalEventEmitter, SEND_CURRENT_KEY_TO_FINGERS_COMPONENT} from '../../../../../src/eventz/global.event-emitter';
import {KEY_TO_FINGER_CONFIG_MAP} from './finger-svg.constants';

@Component({
  selector: 'app-fingers-svg',
  standalone: true,
  imports: [],
  templateUrl: './fingers-svg.component.html',
  styleUrl: './fingers-svg.component.scss'
})
export class FingersSvgComponent {

  constructor(
    private hostElement: ElementRef
  ) {}

  ngAfterViewInit() {
    GlobalEventEmitter.on(SEND_CURRENT_KEY_TO_FINGERS_COMPONENT, (key) => {

      fingersEntrypoint(this.hostElement.nativeElement,
        KEY_TO_FINGER_CONFIG_MAP[key])
    });

  }

}
