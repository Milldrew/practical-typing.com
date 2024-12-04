import {Injectable} from '@angular/core';

const SPEED_TYPING_TEMPLATE = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~${'`'}1!2@3#4$5%6^7&8*9(0){[<>]}-=`

@Injectable({
  providedIn: 'root'
})
export class TextControlsService {
  originalText = SPEED_TYPING_TEMPLATE;
  currentText = SPEED_TYPING_TEMPLATE;
  maxPossibleChars = 0
  currentStartIndex = 0;
  currentEndIndex = 1;
  constructor() {
    this.maxPossibleChars = this.originalText.length;
    this.currentEndIndex = this.maxPossibleChars;
  }
  handleTextSubstringChange() {
    console.log('handleTextSubstringChange')
    this.currentText = this.originalText.substring(
      this.currentStartIndex,
      this.currentEndIndex
    );
    console.log(this.currentText)
  }
}