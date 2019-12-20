import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Api} from './services/api';
import {VehicleApi} from './services/vehicle-api';
import {ChargeSessionApi} from './services/charge-session-api';
import {EVTable} from './components/ev-table/ev-table';


@NgModule(
    {
      declarations: [EVTable],
      imports: [
        CommonModule,
      ],
      providers: [
        Api,
        VehicleApi,
        ChargeSessionApi,
      ],
      exports: [
        EVTable,
      ],
    },
)
export class CoreModule {}
