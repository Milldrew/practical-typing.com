import {Injectable} from '@angular/core';
import {PRACTICAL_LETTERS, PRACTICAL_NUMBERS, PRACTICAL_SPECIAL_CHARACTERS} from './text-controls.constants';
import {GlobalEventEmitter, RUN_FINISHED} from '../eventz/global.event-emitter';

let SPEED_TYPING_TEMPLATE = `~${'`'}1!2@3#4$5%6^7&8*9(0){[<>]}-=`


SPEED_TYPING_TEMPLATE = PRACTICAL_SPECIAL_CHARACTERS


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
  specialCharacters = PRACTICAL_SPECIAL_CHARACTERS

  currentRunType: SpeedTypingRunTypes = LETTERS;
  // currentRunType: SpeedTypingRunTypes = SPECIAL_CHARACTERS;
  originalText = SPEED_TYPING_TEMPLATE;
  currentText = this.getOriginalText(this.currentRunType);
  maxPossibleChars = 0
  currentStartIndex = 0;
  currentEndIndex = 1;
  minimumTextLength = 3;
  constructor() {
    this.maxPossibleChars = this.originalText.length;
    this.currentEndIndex = this.maxPossibleChars;
    this.handleRunFinished();
  }
  currentRunWordsPerMinute = 0;
  handleRunFinished() {
    GlobalEventEmitter.on(RUN_FINISHED, (runTime: number) => {
      console.log('RUN_FINISHED', runTime)
      this.currentRunWordsPerMinute = this.calculateWordsPerMinute(runTime);
    })
  }
  calculateWordsPerMinute(runTime: number) {
    const words = this.currentEndIndex / 5;
    const minutes = runTime / 60;
    return words / minutes;
  }

  setCurrentRunType(runType: SpeedTypingRunTypes) {
    console.log('setCurrentRunType')
    this.currentRunType = runType;
    this.originalText = this.getOriginalText(runType);
    this.currentText = this.originalText;
    this.maxPossibleChars = this.originalText.length;
    this.currentEndIndex = this.maxPossibleChars;
  }

  getOriginalText(runType: SpeedTypingRunTypes) {
    switch (runType) {
      case LETTERS:
        return this.letters;
      case NUMBERS:
        return this.numbers;
      case SPECIAL_CHARACTERS:
        return this.specialCharacters;
      default:
        return this.letters;
    }
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
