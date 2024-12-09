import {Component, ElementRef, Input} from '@angular/core';
import * as d3 from 'd3';
import {addTitle, createAKey, createAKeyboard, createTheBaseGroups, keyboardSVG} from './keyboard.functions';
import {KEYBOARD_SHIFT_DOWN, KEYBOARD_SHIFT_UP, TIME_TO_PRESS, TimeToPress, TimeToPressesAverage} from './keyboard.constants';

@Component({
  selector: 'practical-keyboard',
  standalone: true,
  imports: [],
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.scss'
})
export class KeyboardComponent {

  constructor(
    private element: ElementRef
  ) {}

  ngOnInit() {
    console.log(this.element.nativeElement)
  }

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
    this.createKeyboard();
  }

  createKeyboard() {
    this.svg = keyboardSVG.call(this, this.element.nativeElement);

    createTheBaseGroups.call(this);
    addTitle.call(this);
    createAKeyboard.call(this, KEYBOARD_SHIFT_UP, this.topKeyboardGroup)
    createAKeyboard.call(this, KEYBOARD_SHIFT_DOWN, this.bottomKeyboardGroup)

  }

}
