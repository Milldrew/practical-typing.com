import {Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {PedagodgyComponent} from '../pedagodgy/pedagodgy.component';
import {ScoresComponent} from '../scores/scores.component';
import {KeyboardPageComponent} from '../keyboard-page/keyboard-page.component';

export const routes: Routes = [
  {path: '', component: HomeComponent, },
  {path: 'home', component: HomeComponent, },
  {path: 'pedagodgy', component: PedagodgyComponent},
  {path: 'scores', component: ScoresComponent},
  {path: 'keyboard', component: KeyboardPageComponent, },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];


