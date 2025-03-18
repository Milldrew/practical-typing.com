import {Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {PedagodgyComponent} from '../pedagodgy/pedagodgy.component';
import {ScoresComponent} from '../scores/scores.component';
import {KeyboardPageComponent} from '../keyboard-page/keyboard-page.component';
import {CompeteModeComponent} from '../compete-mode/compete-mode.component';
import {HighScoresComponent} from '../high-scores/high-scores.component';

export const routes: Routes = [
  {path: '', component: HomeComponent, },
  {path: 'home', component: HomeComponent, },
  {path: 'pedagodgy', component: PedagodgyComponent},
  {path: 'scores', component: ScoresComponent},
  {path: 'keyboard', component: KeyboardPageComponent, },
  {path: 'compete-mode', component: CompeteModeComponent},
  {path: 'highscores', component: HighScoresComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];


