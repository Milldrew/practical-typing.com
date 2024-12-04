import {Directive} from '@angular/core';
import {ElementRef} from '@angular/core';
import {NON_LETTERS, NON_LETTER_CHAR_TO_NAME} from './speed-typing.constants';
import {TimerService} from '../timer/timer.service';

@Directive({
  selector: '[practicalSpeedTypingText]'
})
export class SpeedTypingTextDirective {
  characterList: string[] = [];

  setupTypingListener = setupTypingListener.bind(this);

  constructor(public el: ElementRef,
    public timer: TimerService

  ) {
  }
  lastIndex = 0;

  ngAfterViewInit() {
    this.setupTypingListener();

    const text =
      replaceAmpEscapesWithChars(
        this.el.nativeElement.innerHTML
      )
    this.el.nativeElement.innerHTML = '';
    text.split('').map((char: string, index: number) => {
      console.log(text)

      if (isWhiteSpace(char)) {
      } else {
        this.lastIndex = index;
        this.characterList.push(char);
        this.el.nativeElement.appendChild(createSpanForCharacter(char, index));
      }

    });
  }

}

function setupTypingListener(this: SpeedTypingTextDirective,) {
  window.addEventListener('keypress', (event: KeyboardEvent) => {
    if (!this.timer.timerHasStarted) {
      this.timer.start();
    }

    const char = String.fromCharCode(event.charCode);
    console.log(char);
    if (char === this.characterList[0]) {
      console.log(this.characterList)
      handleCharacterTyped.call(this, char);
    }
  })
}

function isWhiteSpace(char: string) {
  return char === ' ' || char === '\t' || char === '\n';
}

function createSpanForCharacter(char: string, index: number) {
  if (char.includes('&')) {
    debugger;
  }

  const span = document.createElement('span');
  span.innerHTML = char;

  let id: string;
  if (NON_LETTERS.includes(char)) {
    //@ts-ignore
    id = NON_LETTER_CHAR_TO_NAME[char];
  } else {
    id = char;
  }
  span.id = createId(char);
  span.style.fontSize = '36px';
  return span;
}

function handleCharacterTyped(this: SpeedTypingTextDirective, char: string) {
  let id: string;
  if (NON_LETTERS.includes(char)) {
    //@ts-ignore
    id = NON_LETTER_CHAR_TO_NAME[char];
  } else {
    id = char;
  }
  const span =
    this.el.nativeElement
      .querySelector(`#${createId(char)}`);
  console.log(span)
  if (span) {
    //@ts-ignore
    span.style.color = '#fff';
    this.characterList.shift();
    console.log(this.characterList)
    if (
      this.characterList.length === 0
    ) {
      this.timer.stop();
    }
  }
}

function createId(char: string) {

  let charName = char;
  if (NON_LETTERS.includes(char)) {
    //@ts-ignore
    charName = NON_LETTER_CHAR_TO_NAME[char];
  } else {
    charName = char;
  }
  return `char-${charName}`;
}

function replaceAmpEscapesWithChars(text: string) {
  return text.replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, '\'');
}
