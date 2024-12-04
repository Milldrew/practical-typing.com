import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';


export const SPEED_TYPING_TEMPLATE = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~${'``'}1!2@3#4$5%6^7&8*9(0)({[<>]})-=\
`

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  speedTypingTemplate = SPEED_TYPING_TEMPLATE;
}


