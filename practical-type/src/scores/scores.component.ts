import {Component} from '@angular/core';
import {ScoresService} from './scores.service';

@Component({
  selector: 'practical-scores',
  standalone: true,
  imports: [],
  templateUrl: './scores.component.html',
  styleUrl: './scores.component.scss'
})
export class ScoresComponent {
  constructor(
    private socresService: ScoresService
  ) {}
}
