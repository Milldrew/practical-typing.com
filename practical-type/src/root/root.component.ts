import {Component} from '@angular/core';
import {RouterLink, RouterModule} from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {TimerService} from '../timer/timer.service';

@Component({
  standalone: true,
  selector: 'practical-root',
  imports: [RouterModule, MatMenuModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './root.component.html',
  styleUrl: './root.component.scss'
})
export class RootComponent {
  constructor(
    public timerService: TimerService
  ) {}


  getYear() {
    return new Date().getFullYear();
  }
}
