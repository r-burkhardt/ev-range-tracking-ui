import {Serializable} from '../serializable';


export class Vehicle implements Serializable<Vehicle> {

  private vehicleId = '';

  constructor (
      private modelYear = '',
      private modelMake = '',
      private model = '',
      private batteryCapacity = 0,
      private odometerStart = 0,
      public odometerCurrent = odometerStart,
  ) {}

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
