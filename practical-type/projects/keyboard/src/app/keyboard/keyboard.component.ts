import {Component, ElementRef, Input} from '@angular/core';
import * as d3 from 'd3';
import {addTitle, createAKey, createAKeyboard, createTheBaseGroups, keyboardSVG} from './keyboard.functions';
import {KEYBOARD_SHIFT_DOWN, KEYBOARD_SHIFT_UP, SVG_HEIGHT, SVG_WIDTH, TIME_TO_PRESS, TimeToPress, TimeToPressesAverage} from './keyboard.constants';

@Component({
  selector: 'practical-keyboard',
  standalone: true,
  imports: [],
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.scss'
})
export class KeyboardComponent {
  resizeFactor: number;

  constructor(
    private element: ElementRef
  ) {}


  @Input()
  timeToPresses: TimeToPressesAverage = TIME_TO_PRESS

  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>;
  /**
    * This group will contain everything and be used for formatting like margin or padding
    */
  baseGroup: d3.Selection<SVGGElement, unknown, null, any>;
  /**
    * Top KeyboardGroup
    * shift up keybaord
    */
  topKeyboardGroup: d3.Selection<SVGGElement, unknown, null, any>;

  /**
    * Bottom KeyboardGroup
    * shift down keybaord
    */
  bottomKeyboardGroup: d3.Selection<SVGGElement, unknown, null, any>;

  ngAfterViewInit() {
    const payload = this.element.nativeElement.getBoundingClientRect();

    this.createKeyboard(payload.width, payload.height);
    window.addEventListener('resize', () => {
      this.element.nativeElement.innerHTML = '';
      const payload = this.element.nativeElement.getBoundingClientRect();
      console.log('payload', payload)

      this.createKeyboard(payload.width, payload.height);
    })
  }

  createKeyboard(width = SVG_WIDTH, height = SVG_HEIGHT) {
    this.svg = keyboardSVG.call(this, this.element.nativeElement, width, height);

    createTheBaseGroups.call(this);
    // addTitle.call(this);
    createAKeyboard.call(this, KEYBOARD_SHIFT_UP, this.topKeyboardGroup)
    createAKeyboard.call(this, KEYBOARD_SHIFT_DOWN, this.bottomKeyboardGroup)

    this.cropKeyboardHeightAndWidth();
  }

  cropKeyboardHeightAndWidth() {
    //@ts-ignore
    // const payload = this.baseGroup.node().getClientBoundingRect();
    const payload = this.baseGroup.node().getBoundingClientRect();
    const newSvgHeight = payload.height / .75
    const newSvgWidth = payload.width / .90
    this.svg.style('height', newSvgHeight)
    this.svg.style('width', newSvgWidth)
    const hostHeight =
      this.element.nativeElement.style.height > newSvgHeight ? newSvgHeight : this.element.nativeElement.style.height
    this.element.nativeElement.style.height = `${hostHeight}px`

  }

}
