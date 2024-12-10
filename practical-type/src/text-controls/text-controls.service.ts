import {Injectable} from '@angular/core';
import {PRACTICAL_LETTERS, PRACTICAL_NUMBERS, PRACTICAL_SPECIAL_CHARACTERS} from './text-controls.constants';
import {GlobalEventEmitter, RESTART_RUN, RUN_FINISHED, SEND_RUN_DATA} from '../eventz/global.event-emitter';
import {ScoresService} from '../scores/scores.service';
import {HomeComponent} from '../home/home.component';
import {KeyboardDataService} from '../keyboard-page/keyboard-data.service';

let SPEED_TYPING_TEMPLATE = `~${'`'}1!2@3#4$5%6^7&8*9(0){[<>]}-=`


SPEED_TYPING_TEMPLATE = PRACTICAL_SPECIAL_CHARACTERS


const LETTERS = 'letters';
const NUMBERS = 'numbers';
const SPECIAL_CHARACTERS = 'special-characters';
const TARGETED_PRACTICE = 'targeted-practice';

export type SpeedTypingRunTypes =
  typeof LETTERS |
  typeof NUMBERS |
  typeof SPECIAL_CHARACTERS |
  typeof TARGETED_PRACTICE;




SPEED_TYPING_TEMPLATE = PRACTICAL_LETTERS
@Injectable({
  providedIn: 'root'
})
export class TextControlsService {
  getChartDataHome: HomeComponent['getChartData']
  letters = PRACTICAL_LETTERS
  numbers = PRACTICAL_NUMBERS
  specialCharacters = PRACTICAL_SPECIAL_CHARACTERS
  targetedPractice = TARGETED_PRACTICE

  currentRunType: SpeedTypingRunTypes = LETTERS;
  // currentRunType: SpeedTypingRunTypes = SPECIAL_CHARACTERS;
  originalText = SPEED_TYPING_TEMPLATE;
  currentText = this.getOriginalText(this.currentRunType);
  maxPossibleChars = 0
  currentStartIndex = 0;
  currentEndIndex = 1;
  minimumTextLength = 3;
  constructor(
    private keyboardDataService: KeyboardDataService) {

    this.maxPossibleChars = this.originalText.length;
    this.currentEndIndex = this.maxPossibleChars;
    this.handleRunFinished();
  }
  currentRunWordsPerMinute = 0;
  handleRunFinished() {
    GlobalEventEmitter.on(RUN_FINISHED, (runTime: number) => {
      console.log('RUN_FINISHED', runTime)
      this.currentRunWordsPerMinute = this.calculateWordsPerMinute(runTime);

      GlobalEventEmitter.emit(SEND_RUN_DATA, this.currentRunType, this.currentRunWordsPerMinute);
      this.keyboardDataService.stopTimer()
      this.keyboardDataService.resetTimer()
    })
  }
  calculateWordsPerMinute(runTime: number) {
    const words = this.currentEndIndex / 5;
    const minutes = runTime / 60;
    return words / minutes;
  }

  setCurrentRunType(runType: SpeedTypingRunTypes) {
    this.targetedPractice =
      this.keyboardDataService.getTheSlowestSixKeys()
    this.currentRunType = runType;
    this.originalText = this.getOriginalText(runType);
    if (this.isTextReversed) {
      this.currentText = reverseText(this.originalText);
    } else {
      this.currentText = this.originalText;
    }
    this.maxPossibleChars = this.originalText.length;
    if (this.currentEndIndex > this.maxPossibleChars) {
      this.currentEndIndex = this.maxPossibleChars;
    }
    this.handleTextSubstringChange();
    this.getChartDataHome();
  }

  getOriginalText(runType: SpeedTypingRunTypes): string {
    let letters: string;
    switch (runType) {
      case LETTERS:
        letters = this.letters;
        break;
      case NUMBERS:
        letters = this.numbers;
        break
      case SPECIAL_CHARACTERS:
        letters = this.specialCharacters;
        break
      case TARGETED_PRACTICE:
        letters = this.keyboardDataService.getTheSlowestSixKeys()
        break
      default:
        letters = this.letters;
    }
    return letters;
  }
  handleTextSubstringChange() {
    setTimeout(() => {

      GlobalEventEmitter.emit(RESTART_RUN);
    }, 20)
    console.log('handleTextSubstringChange')
    if (this.currentEndIndex < this.minimumTextLength) {
      this.currentStartIndex = 0;
      this.currentEndIndex = this.minimumTextLength;
    }
    let newText: string;
    if (this.isTextReversed) {
      newText = reverseText(this.originalText);
    } else {
      newText = this.originalText;
    }
    this.currentText =
      newText.substring(
        this.currentStartIndex,
        this.currentEndIndex
      );
    console.log(this.currentText)
  }
  isTextReversed = false;
  reverseText() {
    GlobalEventEmitter.emit(RESTART_RUN);
    this.isTextReversed = !this.isTextReversed;
    this.currentText = reverseText(this.currentText);

  }
}


function reverseText(text: string) {
  return text.split('').reverse().join('');
}

