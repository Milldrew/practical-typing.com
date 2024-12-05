import {Injectable} from '@angular/core';

let SPEED_TYPING_TEMPLATE = `~${'`'}1!2@3#4$5%6^7&8*9(0){[<>]}-=`

const LETTERS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMBERS = '12345678909876543210';

SPEED_TYPING_TEMPLATE = NUMBERS;

@Injectable({
  providedIn: 'root'
})
export class TextControlsService {
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
