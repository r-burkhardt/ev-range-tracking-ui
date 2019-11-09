import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRouting} from './app-routing';
import {App} from './app';
import {CoreModule} from './core/core.module';


@NgModule(
    {
      declarations: [
        App,
      ],
      imports: [
        BrowserModule,
        AppRouting,
        CoreModule,
      ],
      providers: [],
      bootstrap: [App],
    },
)
export class AppModule {}
