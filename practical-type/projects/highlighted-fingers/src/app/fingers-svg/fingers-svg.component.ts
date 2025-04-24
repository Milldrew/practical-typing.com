import {Component, ElementRef} from '@angular/core';
import {insertSVG} from './d3-functions/create-svg.function';
import {fingersEntrypoint} from './d3-functions/entrypoint.function';

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
    fingersEntrypoint(this.hostElement.nativeElement);
  }

}
