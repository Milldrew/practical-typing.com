import {Component, ViewChild} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {KeyboardComponent} from './keyboard/keyboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, KeyboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
