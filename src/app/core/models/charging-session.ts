import {Serializable} from '../serializable';


export class ChargingSession implements Serializable<ChargingSession> {

  private _sessionId = '';

  constructor (
      private carId = '',
      public chargeDate: Date = new Date(Date.now()), // "date": "2017/05/14",
      public distanceTraveled = 0, // "distance": 272.6
      public energyUsed = 0, // "kWh": 56
      public maxPossRange = 0, // "max": 332
      public possRange = 0, // "average": 282
      public minPossRange = 0, // "min": 230
      public odometerReading = 0, // "odometer": 415
      public notes = '', // "notes": ""
  ) {}

  get sessionId(): string {
    return this._sessionId;
  }

  set sessionId(value: string) {
    this._sessionId = value;
  }

  /**
   * Calculates the miles per kWh, by dividing a distance by the amount of
   * energy used or the capcity of the battery as passed in through the
   * 'energyCapOrUse' parameter.
   * @param {number} distance
   * @param {number} energyCapOrUse
   * @returns {number}
   */
  calculateMileage (distance: number, energyCapOrUse: number): string {
    return (Math.round((distance / energyCapOrUse) * 10) / 10).toFixed(1);
  }

  /**
   * Converts the class object into a JSON object.
   * @returns {string}
   */
  serialize (): string {
    return JSON.stringify(this);
  }

  /**
   * Imports a JSON object into a class object.
   * @param json
   * @returns {ChargingSession}
   */
  deserialize (json: any): ChargingSession {
    this.sessionId = (json.sessionId) ? json.sessionId : '';
    this.carId = (json.carId) ? json.carId : '';
    this.chargeDate = json.chargeDate;
    this.distanceTraveled = json.distanceTraveled;
    this.energyUsed = json.energyUsed;
    this.maxPossRange = json.maxPossRange;
    this.possRange = json.possRange;
    this.minPossRange = json.minPossRange;
    this.odometerReading = json.odometerReading;
    this.notes = json.notes;

    return this;
  }

  /**
   * Returns a duplicate class object from the original that does not point
   * back to the original
   * @returns {ChargingSession}
   */
  clone (): ChargingSession {
    return new ChargingSession().deserialize(
        JSON.parse(JSON.stringify(this)));
  }
}
