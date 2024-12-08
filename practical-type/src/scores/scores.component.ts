import {Component} from '@angular/core';
import {ScoresService, WordsPerMinute} from './scores.service';
import {WpmLineChartComponent} from '../wpm-line-chart/wpm-line-chart.component';
import {SpeedTypingRunTypes} from '../text-controls/text-controls.service';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
@Component({
  selector: 'practical-scores',
  standalone: true,
  imports: [WpmLineChartComponent, MatButtonModule,
  ],
  templateUrl: './scores.component.html',
  styleUrl: './scores.component.scss'
})
export class ScoresComponent {
  constructor(
    public scoresService: ScoresService
  ) {}

  titleForChart: string;
  dataForChart: WordsPerMinute[] = [];
  currentRunType: SpeedTypingRunTypes = 'letters';

  getScores(runType: SpeedTypingRunTypes) {
    this.currentRunType = runType;
    this.dataForChart = this.scoresService.scores[runType];
    console.log(this.dataForChart, '-----')
    this.titleForChart = titleCase(runType) + 'WPM';;
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.scoresService.getScoresFromLocalStorage()
      this.getScores('letters');
    }, 200)
  }
  getHighScore() {
    return Math.max(...this.dataForChart).toFixed(2);
  }
}

function titleCase(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}
