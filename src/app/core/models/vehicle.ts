import {Serializable} from '../serializable';


export class Vehicle implements Serializable<Vehicle> {

  vehicleId = '';

  constructor (
      public modelYear = '',
      public modelMake = '',
      public model = '',
      public batteryCapacity = 0,
      public odometerStart = 0,
      public odometerCurrent = 0,
  ) {
    this.modelYear = modelYear;
    this.modelMake = modelMake;
    this.model = model;
    this.batteryCapacity = batteryCapacity;
    this.odometerStart = odometerStart;
    this.odometerCurrent = odometerCurrent;
  }

  serialize (): string {
    this.vehicleId = (!this.vehicleId.length) ? undefined : this.vehicleId;
    return JSON.stringify(this);
  }

  deserialize (json: any): Vehicle {
    this.vehicleId = (json.vehicleId) ? json.vehicleId : '';
    this.modelYear = json.modelYear.toString();
    this.modelMake = json.modelMake;
    this.model = json.model;
    this.batteryCapacity = +json.batteryCapacity;
    this.odometerStart = +json.odometerStart;
    this.odometerCurrent = +json.odometerCurrent;

    return this;
  }

  clone (): Vehicle {
    return new Vehicle().deserialize(JSON.parse(JSON.stringify(this)));
  }
}
