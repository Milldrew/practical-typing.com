
import {Directive, Input} from '@angular/core';
import {ElementRef} from '@angular/core';
import {NON_LETTERS, NON_LETTER_CHAR_TO_NAME} from './speed-typing.constants';
import {TimerService} from '../timer/timer.service';
import {changeAllSpansToNonTypedColor, createId, createSpanForCharacter, isWhiteSpace, setupTypingListener} from './speed-typing-text.functions';
import {GlobalEventEmitter, RESTART_RUN} from '../eventz/global.event-emitter';
import {TextControlsService} from '../text-controls/text-controls.service';
import {KeyboardDataService} from '../keyboard-page/keyboard-data.service';
import {SpeedTypingTextService} from './speed-typing-text.service';
import {Router} from '@angular/router';
import {CompeteModeService} from '../compete-mode/compete-mode.service';

@Directive({
  standalone: true,
  selector: '[practicalSpeedTypingText]'
})
export class SpeedTypingTextDirective {
  currentIndex: number = 0;
  characterList: string[] = [];
  @Input() currentHighSchore: number = 0;

  setupTypingListener = setupTypingListener.bind(this);

  constructor(public el: ElementRef,
    public timer: TimerService,
    public textService: TextControlsService,
    public keyboardDataService: KeyboardDataService,
    private speedTypingService: SpeedTypingTextService,
    private competeModeService: CompeteModeService,
    private router: Router

  ) {
  }
  lastIndex = 0;

  @Input() text: string = 'abc'

  ngOnChanges() {
    console.log('on changes', this.text)
    this.setUpInnerHTML()
    this.changeAllSpansToNonTypedColor();

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
  changeAllSpansToNonTypedColor = changeAllSpansToNonTypedColor.bind(this);

  isCompeteMode() {
    const path = this.router.url;
    return path.includes('compete-mode');

  }
  ngOnInit() {
    GlobalEventEmitter.on(RESTART_RUN, () => {
      console.log('restart run event')
      this.currentIndex = 0;
      if (this.isCompeteMode()) {
        this.characterList = this.competeModeService.competitionLetters.split('')

      } else {
        this.characterList = this.textService.currentText.split('')

      }
      this.changeAllSpansToNonTypedColor();
    })
  }

  ngAfterViewInit() {
    this.setupTypingListener();
    this.el.nativeElement.style.overflowWrap = 'anywhere';
  }
}


