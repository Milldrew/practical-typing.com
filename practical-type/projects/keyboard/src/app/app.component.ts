import {Component, ViewChild} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {KeyboardComponent} from './keyboard/keyboard.component';
import {CurrentKeyKeyboardComponent} from './current-key-keyboard/current-key-keyboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, KeyboardComponent, CurrentKeyKeyboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
