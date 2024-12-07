import {Component, Input} from '@angular/core';
import {WordsPerMinute} from '../scores/scores.service';

@Component({
  selector: 'app-wpm-line-chart',
  standalone: true,
  imports: [],
  templateUrl: './wpm-line-chart.component.html',
  styleUrl: './wpm-line-chart.component.scss'
})
export class WpmLineChartComponent {
  @Input() data: WordsPerMinute[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
  ]

}
