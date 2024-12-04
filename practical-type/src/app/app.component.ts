import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SpeedTypingTextDirective} from '../speed-typing-text/speed-typing-text.directive';
import {TimerComponent} from '../timer/timer.component';


// export const SPEED_TYPING_TEMPLATE = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~${'`'}1!2@3#4$5%6^7&8*9(0){[<>]}-=\`
export const SPEED_TYPING_TEMPLATE = 'abc';


@Component({
  selector: 'app-root',
  imports: [SpeedTypingTextDirective, TimerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  speedTypingTemplate = SPEED_TYPING_TEMPLATE;
}


