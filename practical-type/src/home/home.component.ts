import {Component} from '@angular/core';
import {TimerComponent} from '../timer/timer.component';
import {TextControlsService} from '../text-controls/text-controls.service';
import {TextControlsComponent} from '../text-controls/text-controls.component';
import {TimerService} from '../timer/timer.service';
import {SpeedTypingTextDirective} from '../speed-typing-text/speed-typing-text.directive';
import {ScoresService} from '../scores/scores.service';
import {JsonPipe} from '@angular/common';
import {WpmLineChartComponent} from '../wpm-line-chart/wpm-line-chart.component';
import {GlobalEventEmitter, RESTART_RUN, SEND_RUN_DATA} from '../eventz/global.event-emitter';
import {KeyboardDataService} from '../keyboard-page/keyboard-data.service';
import {KeyboardComponent} from '../../projects/keyboard/src/app/keyboard/keyboard.component';
import {FingersSvgComponent} from '../../projects/highlighted-fingers/src/app/fingers-svg/fingers-svg.component';


@Component({
  standalone: true,
  selector: 'practical-home',
  imports: [TimerComponent, TextControlsComponent, SpeedTypingTextDirective, JsonPipe, WpmLineChartComponent,
    KeyboardComponent,
    FingersSvgComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(
    public textControlsService: TextControlsService,
    public timerService: TimerService,
    public scoreService: ScoresService,
    public keyboardDataService: KeyboardDataService
  ) {

    GlobalEventEmitter.on(SEND_RUN_DATA, (data) => {
      setTimeout(() => {
        this.getChartData()
      }, 10)
      setTimeout(() => {
        GlobalEventEmitter.emit(RESTART_RUN)
      }, 1000)
    })
  }
  ngOnInit() {
    this.textControlsService.getChartDataHome = this.getChartData.bind(this)

    this.getChartData()
  }
  chartData: WpmLineChartComponent['data'] = []

  getChartData() {
    const chartType = this.textControlsService.currentRunType
    const wpmList = this.scoreService.scores[chartType]
    if (!wpmList || !Array.isArray(wpmList)) return []
    this.chartData = [...wpmList]
    return this.chartData || []
  }

  createTitleOfChart() {
    const chartType = this.textControlsService.currentRunType
    let chartName = chartType[0].toUpperCase() + chartType.slice(1)
    return `WPM For ${chartName}`
  }

  currentHighestWpm() {
    const chartType = this.textControlsService.currentRunType
    const wpmList = this.scoreService.scores[chartType] || []
    if (wpmList.length === 0) return 0
    return Number(Math.max(...wpmList).toFixed(0))
  }
}
