import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Api} from './services/api';
import {VehicleApi} from './services/vehicle-api';
import {ChargeSessionApi} from './services/charge-session-api';


@NgModule(
    {
      declarations: [],
      imports: [
        CommonModule,
      ],
      providers: [
        Api,
        VehicleApi,
        ChargeSessionApi,
      ],
      exports: [],
    },
)
export class CoreModule {}
