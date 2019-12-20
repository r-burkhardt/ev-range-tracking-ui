import { Component, OnInit } from '@angular/core';
import {Vehicle} from '@app/core/models/vehicle';

@Component({
  selector: 'app-vehical-summary',
  templateUrl: './vehical-summary.html',
  styleUrls: ['./vehical-summary.scss']
})
export class VehicalSummary implements OnInit {

  testCar: Vehicle;

  constructor() { }

  ngOnInit() {
    this.testCar = new Vehicle(
        '2017',
        'Chevrolet',
        'Bolt EV',
        60,
        238,
        11,
    );
    this.testCar.vehicleId = 'j34l5657jkk3l2';
  }

}
