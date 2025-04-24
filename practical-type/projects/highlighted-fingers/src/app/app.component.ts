import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FingersSvgComponent} from './fingers-svg/fingers-svg.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FingersSvgComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'highlighted-fingers';
}
