import {Injectable} from '@angular/core';
import {GlobalEventEmitter, RESTART_RUN, RUN_FINISHED} from '../eventz/global.event-emitter';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  timerHasStarted: boolean = false;
  timerHasFinished: boolean = false;
  timeCounter: number = 0;

  intervalReference: any;
  constructor() {

    this.handleRestartRun();
  }
  start() {
    if (this.timerHasStarted) {
      return;
    }

    this.intervalReference =
      setInterval(() => {
        this.timeCounter += .01;
      }, 10);
    console.log('this.intervalReference', this.intervalReference)
    this.timerHasStarted = true;
  }

  stop() {
    console.log('STOPPING TIMER');
    console.log('this.intervalReference', this.intervalReference)
    clearInterval(this.intervalReference);
    GlobalEventEmitter.emit(RUN_FINISHED, this.timeCounter);
    this.timerHasFinished = true;
    this.timerHasStarted = false;
  }
  ngAfterViewInit() {
    this.start();
  }
  handleRestartRun() {
    GlobalEventEmitter.on(RESTART_RUN, () => {
      console.log(RESTART_RUN)
      this.timeCounter = 0;
      this.timerHasFinished = false;
      this.timerHasStarted = false;
    })
  }
}
