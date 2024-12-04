import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  timerHasStarted: boolean = false;
  timerHasFinished: boolean = false;
  counter: number = 0;

  intervalReference: any;
  constructor() {}
  start() {

    this.intervalReference =
      setInterval(() => {
        this.counter++;
      }, 1000);
  }

  stop() {
    clearInterval(this.intervalReference);
  }
  ngAfterViewInit() {
    this.start();
  }
}
