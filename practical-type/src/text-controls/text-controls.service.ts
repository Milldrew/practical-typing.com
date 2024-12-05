import {Injectable} from '@angular/core';
import {PRACTICAL_LETTERS, PRACTICAL_NUMBERS, PRACTICAL_SPECIAL_CHARACTERS} from './text-controls.constants';

let SPEED_TYPING_TEMPLATE = `~${'`'}1!2@3#4$5%6^7&8*9(0){[<>]}-=`


// SPEED_TYPING_TEMPLATE = PRACTICAL_SPECIAL_CHARACTERS

const LETTERS = 'letters';
const NUMBERS = 'numbers';
const SPECIAL_CHARACTERS = 'special-characters';

export type SpeedTypingRunTypes =
  typeof LETTERS |
  typeof NUMBERS |
  typeof SPECIAL_CHARACTERS;



SPEED_TYPING_TEMPLATE = PRACTICAL_LETTERS
@Injectable({
  providedIn: 'root'
})
export class TextControlsService {
  letters = PRACTICAL_LETTERS
  numbers = PRACTICAL_NUMBERS

  currentRunType: SpeedTypingRunTypes = LETTERS;
  originalText = SPEED_TYPING_TEMPLATE;
  currentText = SPEED_TYPING_TEMPLATE;
  maxPossibleChars = 0
  currentStartIndex = 0;
  currentEndIndex = 1;
  minimumTextLength = 3;
  constructor() {
    this.maxPossibleChars = this.originalText.length;
    this.currentEndIndex = this.maxPossibleChars;
  }
  handleTextSubstringChange() {
    console.log('handleTextSubstringChange')
    if (this.currentEndIndex < this.minimumTextLength) {
      this.currentStartIndex = 0;
      this.currentEndIndex = this.minimumTextLength;
    }
    this.currentText = this.originalText.substring(
      this.currentStartIndex,
      this.currentEndIndex
    );
    console.log(this.currentText)
  }
}
