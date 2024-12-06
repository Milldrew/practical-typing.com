import {SpeedTypingTextDirective} from './speed-typing-text.directive';
import {NON_LETTERS, NON_LETTER_CHAR_TO_NAME, NUMBER_TO_NUMBER_NAME} from './speed-typing.constants';


export const NON_TYPED_LETTER_COLOR =
  'rgb(100, 102, 105)'

export function changeAllSpansToNonTypedColor(this: SpeedTypingTextDirective) {
  this.el.nativeElement.querySelectorAll('span').forEach((span: HTMLElement) => {
    span.style.color = NON_TYPED_LETTER_COLOR;
  })
}

export function createId(index: number) {


  return NUMBER_TO_NUMBER_NAME[index];
}

export function replaceAmpEscapesWithChars(text: string) {
  return text.replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, '\'');
}
export function handleCharacterTyped(this: SpeedTypingTextDirective, char: string) {
  let id: string;
  const idSelector = `#${createId(this.currentIndex)}`;
  console.log(idSelector, this.currentIndex)
  const span =
    this.el.nativeElement
      .querySelector(idSelector);

  console.log(span)

  if (span) {
    //@ts-ignore
    span.style.color = '#fff';
    this.characterList.shift();
    this.currentIndex += 1;
    console.log(this.characterList)
    if (
      this.characterList.length === 0
    ) {
      this.timer.stop();
    }
  }
}

export function setupTypingListener(this: SpeedTypingTextDirective,) {
  window.addEventListener('keypress', (event: KeyboardEvent) => {
    if (!this.timer.timerHasStarted) {
      this.timer.start();
    }

    const char = String.fromCharCode(event.charCode);
    console.log(char);
    console.log(this.characterList[0], char)
    if (char === this.characterList[0]) {
      console.log(this.characterList)
      handleCharacterTyped.call(this, char);
    }
  })
}

export function isWhiteSpace(char: string) {
  return char === ' ' || char === '\t' || char === '\n';
}

export function createSpanForCharacter(char: string, index: number) {
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
  const spanId = createId(index);
  span.id = spanId;
  console.log(`actual span id: ${spanId}`)
  span.style.fontSize = '36px';
  return span;
}

