import {Component} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {HighScoresService} from './high-scores.service';

@Component({
  selector: 'practical-high-scores',
  standalone: true,
  imports: [],
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

}
