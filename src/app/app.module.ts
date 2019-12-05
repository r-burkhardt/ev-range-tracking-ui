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
import {AddEditChargeSession} from './modals/add-edit-charge-session/add-edit-charge-session';
import {UserProfile} from './pages/user-profile/user-profile';
import {HttpClientModule} from '@angular/common/http';
import {
  MatButtonModule, MatDatepickerModule,
  MatDialogModule, MatFormFieldModule,
  MatInputModule, MatNativeDateModule, MatSelectModule, MatSnackBarModule,
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {Header} from './shared/header/header';
import { Footer } from './shared/footer/footer';


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
        AddEditChargeSession,
        UserProfile,
        Header,
        Footer,
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRouting,
        CoreModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDialogModule,
        MatButtonModule,
        MatSnackBarModule,
        MatDatepickerModule,
        MatNativeDateModule,
        FormsModule,
      ],
      providers: [
        HttpClientModule,
      ],
      bootstrap: [App],
    },
)
export class AppModule {}
