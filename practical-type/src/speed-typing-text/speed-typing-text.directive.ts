
import {Directive, Input} from '@angular/core';
import {ElementRef} from '@angular/core';
import {NON_LETTERS, NON_LETTER_CHAR_TO_NAME} from './speed-typing.constants';
import {TimerService} from '../timer/timer.service';
import {createId, createSpanForCharacter, isWhiteSpace, setupTypingListener} from './speed-typing-text.functions';

@Directive({
  selector: '[practicalSpeedTypingText]'
})
export class SpeedTypingTextDirective {
  currentIndex: number = 0;
  characterList: string[] = [];

  setupTypingListener = setupTypingListener.bind(this);

  constructor(public el: ElementRef,
    public timer: TimerService

  ) {
  }
  lastIndex = 0;

  @Input() text: string = 'abc'

  ngOnChanges() {
    console.log('on changes', this.text)
    this.setUpInnerHTML()

  }

  setUpInnerHTML() {
    this.characterList = [];
    this.el.nativeElement.innerHTML = '';
    this.text.split('').map((char: string, index: number) => {
      if (isWhiteSpace(char)) {
      } else {
        this.lastIndex = index;
        this.characterList.push(char);
        this.el.nativeElement.appendChild(createSpanForCharacter(char, index));
      }
    });
  }


  ngAfterViewInit() {
    this.setupTypingListener();
  }

}


