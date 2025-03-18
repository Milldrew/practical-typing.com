import {Component} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {HighScoresService} from './high-scores.service';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'practical-high-scores',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './high-scores.component.html',
  styleUrl: './high-scores.component.scss'
})
export class HighScoresComponent {
  constructor(
    public highScoresService: HighScoresService
  ) {}
  ngOnInit() {
    this.highScoresService.sortScores();
  }
  highestScoreString: string;
  getHighestScoreString() {
    const highestScore = this.highScoresService.highScores[0];
    if (highestScore) {
      return `Highest Score: ${highestScore.name} scored ${highestScore.score.toFixed(2)} words per minute!`;
    } else {
      this.highestScoreString = 'No scores yet!';
    }
    return ''
  }

}
