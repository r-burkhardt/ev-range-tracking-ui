import {Serializable} from '../serializable';
import {RangePoints} from '@app/core/models/range-points';


export class Vehicle implements Serializable<Vehicle> {

  // TODO() Use vehicleId not in constructor
  // private _vehicleId = '';

  constructor (
      private _vehicleId = '',
      private _modelYear = '',
      private _modelMake = '',
      private _model = '',
      private _batteryCapacity = 0,
      private _EPARange = 0,
      private _odometerStart = 0,
      public odometerCurrent = _odometerStart,
      public avgDistanceTraveled = 0, // 272.6
      public avgEnergyUsed = 0, // 56.2
      public avgMaxPossRange = 0, // Whole number: 282
      public avgPossRange = 0, // Whole number: 282
      public avgMinPossRange = 0, // Whole number: 230
      // RangePoints: (max of maxPossRange, 0, EPA Estimated Range)
      public maxPossRangePoints = new RangePoints(0, 0, avgPossRange),
      // RangePoints: (max of possRange, .5, EPA Estimated Range)
      public possRangePoints = new RangePoints(0, .5, _EPARange),
      // RangePoints: (EPA Estimated Range, 0, min of minPossRange)
      public minPossRangePoints = new RangePoints(_EPARange, 0, 0),
  ) {}

  get vehicleId (): string {
    return this._vehicleId;
  }

  set vehicleId (value: string) {
    this._vehicleId = value;
  }

  get modelYear (): string {
    return this._modelYear;
  }

  set modelYear (value: string) {
    this._modelYear = value;
  }

  get modelMake (): string {
    return this._modelMake;
  }

  set modelMake (value: string) {
    this._modelMake = value;
  }

  get model (): string {
    return this._model;
  }

  set model (value: string) {
    this._model = value;
  }

  get batteryCapacity (): number {
    return this._batteryCapacity;
  }

  set batteryCapacity (value: number) {
    this._batteryCapacity = value;
  }

  get EPARange (): number {
    return this._EPARange;
  }

  set EPARange (value: number) {
    this._EPARange = value;
    this.possRangePoints.minPoint = value;
    this.minPossRangePoints.maxPoint = value;
  }

  get odometerStart (): number {
    return this._odometerStart;
  }

  set odometerStart (value: number) {
    this._odometerStart = value;
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
    this.EPARange = +json.EPARange;
    this.odometerStart = +json.odometerStart;
    this.odometerCurrent = +json.odometerCurrent;
    this.avgDistanceTraveled = +json.avgDistanceTraveled;
    this.avgEnergyUsed = +json.avgEnergyUsed;
    this.avgMaxPossRange = +json.avgMaxPossRange;
    this.maxPossRangePoints = new RangePoints().deserialize(json.maxPossRangePoints);
    this.avgPossRange = +json.avgPossRange;
    this.possRangePoints = new RangePoints().deserialize(json.possRangePoints);
    this.avgMinPossRange = +json.avgMinPossRange;
    this.minPossRangePoints = new RangePoints().deserialize(json.minPossRangePoints);

    return this;
  }
}
