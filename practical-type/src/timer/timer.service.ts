import {Injectable} from '@angular/core';
import {GlobalEventEmitter, RESTART_RUN} from '../eventz/global.event-emitter';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  timerHasStarted: boolean = false;
  timerHasFinished: boolean = false;
  counter: number = 0;

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
        this.counter += .01;
      }, 10);
    console.log('this.intervalReference', this.intervalReference)
    this.timerHasStarted = true;
  }

  stop() {
    console.log('STOPPING TIMER');
    this.timerHasFinished = true;
    console.log('this.intervalReference', this.intervalReference)
    clearInterval(this.intervalReference);
  }
  ngAfterViewInit() {
    this.start();
  }
  handleRestartRun() {
    GlobalEventEmitter.on(RESTART_RUN, () => {
      console.log(RESTART_RUN)
      this.counter = 0;
      this.timerHasFinished = false;
      this.timerHasStarted = false;
    })
  }
}
