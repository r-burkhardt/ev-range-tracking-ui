import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRouting} from './app-routing';
import {App} from './app';
import {CoreModule} from './core/core.module';
import {Home} from './pages/home/home';
import {UserAccount} from './authorization/user-account/user-account';
import {VehicalSummary} from './pages/vehical-summary/vehical-summary';
import {ChargeSessions} from './pages/charge-sessions/charge-sessions';
import {Login} from './authorization/login/login';
import {Logout} from './authorization/logout/logout';
import {AddEditVehicle} from './modals/add-edit-vehicle/add-edit-vehicle';
import {AddEditViewChargeSession} from './modals/add-edit-view-charge-session/add-edit-view-charge-session';
import {UserProfile} from './pages/user-profile/user-profile';
import {HttpClientModule} from '@angular/common/http';


@NgModule(
    {
      declarations: [
        App,
        Home,
        UserAccount,
        VehicalSummary,
        ChargeSessions,
        Login,
        Logout,
        AddEditVehicle,
        AddEditViewChargeSession,
        UserProfile,
      ],
      imports: [
        BrowserModule,
        HttpClientModule,
        AppRouting,
        CoreModule,
      ],
      providers: [
          HttpClientModule
      ],
      bootstrap: [App],
    },
)
export class AppModule {}
