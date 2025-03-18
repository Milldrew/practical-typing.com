import {Injectable} from '@angular/core';
import {PRACTICAL_LETTERS, PRACTICAL_NUMBERS, PRACTICAL_SPECIAL_CHARACTERS} from './text-controls.constants';
import {GlobalEventEmitter, RESTART_RUN, RUN_FINISHED, SEND_COMPETE_MODE_RUN_DATA, SEND_RUN_DATA} from '../eventz/global.event-emitter';
import {ScoresService} from '../scores/scores.service';
import {HomeComponent} from '../home/home.component';
import {KeyboardDataService} from '../keyboard-page/keyboard-data.service';
import {Router} from '@angular/router';
import {CompeteModeService} from '../compete-mode/compete-mode.service';

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

  currentRunType: SpeedTypingRunTypes = this.getCurrentRunType();
  getCurrentRunType() {
    const currentRunType = localStorage.getItem('currentRunType') as SpeedTypingRunTypes;
    console.log('--------------------------')
    console.log('currentRunType', currentRunType)
    console.log('--------------------------')
    return currentRunType || LETTERS;
  }
  // currentRunType: SpeedTypingRunTypes = SPECIAL_CHARACTERS;
  originalText: string;
  currentText: string;
  maxPossibleChars = 3
  currentStartIndex = 0;
  currentEndIndex = 3;
  minimumTextLength = 3;
  getCurrentText() {
    this.currentText = this.originalText.substring(this.currentStartIndex, this.currentEndIndex);

  }
  constructor(
    private competeModeService: CompeteModeService,
    private router: Router,
    private keyboardDataService: KeyboardDataService) {
    this.getOriginalText(this.currentRunType);
    this.retrieveTextSettingsFromLocalStorage();
    this.maxPossibleChars = this.originalText.length;

    this.handleRunFinished();
    // this.handleTextSubstringChange()
    this.getCurrentText()
  }

  saveTextSettingsToLocalStorage() {
    localStorage.setItem('currentStartIndex', this.currentStartIndex.toString());
    localStorage.setItem('currentEndIndex', this.currentEndIndex.toString());
    localStorage.setItem('isTextReversed', this.isTextReversed.toString());
    localStorage.setItem('currentRunType', this.currentRunType);
  }
  retrieveTextSettingsFromLocalStorage() {
    this.currentRunType = localStorage.getItem('currentRunType') as SpeedTypingRunTypes || LETTERS;
    const currentStartIndex = localStorage.getItem('currentStartIndex');
    let currentEndIndex: number | string | null = localStorage.getItem('currentEndIndex');

    const isTextReversed = localStorage.getItem('isTextReversed');
    if (currentStartIndex) {
      this.currentStartIndex = parseInt(currentStartIndex);
    } else {
      this.currentStartIndex = 0;
    }
    debugger;
    if (currentEndIndex) {
      currentEndIndex = Number(currentEndIndex);
      if (currentEndIndex < this.minimumTextLength) {
        this.currentEndIndex = this.minimumTextLength;
      } else {

        this.currentEndIndex = currentEndIndex;
      }
    } else {
      if (this.currentText) {
        this.currentEndIndex = this.currentText.length ? this.currentText.length : 3;
      } else {
        this.currentEndIndex = 3;
      }
      debugger;
    }
    debugger;
    if (isTextReversed) {
      this.isTextReversed = isTextReversed === 'true';
    }
  }
  currentRunWordsPerMinute = 0;
  handleRunFinished() {
    GlobalEventEmitter.on(RUN_FINISHED, (runTime: number) => {
      console.log('RUN_FINISHED', runTime)
      this.currentRunWordsPerMinute = this.calculateWordsPerMinute(runTime);
      if (this.isCompeteMode()) {
        GlobalEventEmitter.emit(SEND_COMPETE_MODE_RUN_DATA, this.currentRunWordsPerMinute);

      } else {
        GlobalEventEmitter.emit(SEND_RUN_DATA, this.currentRunType, this.currentRunWordsPerMinute);
      }
      this.keyboardDataService.stopTimer()
      this.keyboardDataService.resetTimer()
    })
  }
  isCompeteMode() {
    const path = this.router.url;
    return path.includes('compete-mode');

  }
  calculateWordsPerMinute(runTime: number) {

    let words;
    if (this.isCompeteMode()) {

      words = this.competeModeService.competitionLetters.length / 5;
    } else {
      words = this.currentEndIndex / 5;
    }
    const minutes = runTime / 60;
    return words / minutes;
  }

  setCurrentRunType(runType: SpeedTypingRunTypes) {
    this.saveTextSettingsToLocalStorage();
    this.targetedPractice =
      this.keyboardDataService.getTheSlowestSixKeys()
    this.currentRunType = runType;
    this.getOriginalText(runType);
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

  getOriginalText(runType: SpeedTypingRunTypes) {
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
        console.trace()
        letters = this.keyboardDataService.getTheSlowestSixKeys()
        break
      default:
        letters = this.letters;
    }
    this.originalText = letters;
  }
  handleTextSubstringChange() {
    this.saveTextSettingsToLocalStorage();
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

