import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Home} from '@app/pages/home/home';
import {UserAccount} from '@app/authorization/user-account/user-account';
import {UserProfile} from '@app/pages/user-profile/user-profile';
import {VehicalSummary} from '@app/pages/vehical-summary/vehical-summary';
import {ChargeSessions} from '@app/pages/charge-sessions/charge-sessions';
import {Login} from '@app/authorization/login/login';
import {Logout} from '@app/authorization/logout/logout';

const routes: Routes = [
  {path: '', component: Home},
  {path: 'profile', component: UserProfile},
  {path: 'vehicle/:id', component: VehicalSummary},
  {path: 'sessions/:carId', component: ChargeSessions},
  {path: 'login', component: Login},
  {path: 'logout', component: Logout},
  {path: 'auth/user', component: UserAccount},
  {path: '**', component: Home}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
