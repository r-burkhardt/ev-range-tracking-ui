import {Component, Input, OnInit} from '@angular/core';
import {Vehicle} from '@app/core/models/vehicle';
// @ts-ignore
import data from 'src/assets/content/en-us-site-copy.json';

@Component({
  selector: 'app-add-edit-vehicle',
  templateUrl: './add-edit-vehicle.html',
  styleUrls: ['./add-edit-vehicle.scss']
})
export class AddEditVehicle implements OnInit {

  @Input() vehicleEdit: Vehicle;

  readonly START_YEAR = 2006;
  vehicleLabels: any;
  vehicleCopy: any;
  globalCopy: any;


  constructor() { }

  ngOnInit() {
    this.vehicleLabels = data['vehicleLabels'];
    this.vehicleCopy = data['vehicleCopy'];
    this.globalCopy = data['global'];
    if (!this.vehicleEdit) {
      this.vehicleEdit = new Vehicle(
          '',
          '2018',
          'Chevrolet',
          'Bolt EV',
          60,
          238,
          11,
      );
    }

    console.log(this.vehicleLabels);
  }

  getFormTitle(): string {
    if (!this.vehicleEdit.vehicleId) return this.vehicleCopy.formAddVehicleTitle;
    return this.vehicleCopy.formEditVehicleTitle;
  }

  getModelYears(): string[] {
    const numOfYears = new Date().getFullYear()  - this.START_YEAR;
    let years = [];
    years.length = numOfYears + 2;
    return (years.fill(2006)).map((base, index) => (base + index).toString()).reverse();
  }

}
