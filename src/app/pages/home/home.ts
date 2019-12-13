import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ChargingSession} from '@app/core/models/charging-session';
import {Vehicle} from '@app/core/models/vehicle';
import {RangePoints} from '@app/core/models/range-points';


@Component({
             selector: 'app-home',
             templateUrl: './home.html',
             styleUrls: ['./home.scss'],
           })
export class Home implements OnInit {

  chargeSessions: ChargingSession[];
  testCar: Vehicle;
  testSession: ChargingSession;

  propertiesToAverage = [
    'distanceTraveled',
    'energyUsed',
    'maxPossRange',
    'possRange',
    'minPossRange',
  ];

  constructor (private http: HttpClient) { }

  async ngOnInit () {
    this.testCar = new Vehicle(
        '2017',
        'Chevrolet',
        'Bolt EV',
        60,
        238,
        11,
    );
    this.testCar.vehicleId = 'j34l5657jkk3l2';

    this.testSession = new ChargingSession(
        '',
        new Date(Date.now()),
        147.8,
        24.7,
        333,
        283,
        233,
        14568,
        '',
    );
    // this.testCar.EPARange = 238;
    // this.testCar.batteryCapacity = 60;
    await this.http
        .get('http://localhost:4200/assets/data/charge-data.json')
        .toPromise()
        .then((data) => {
          this.chargeSessions = data['sessions'].map(
              (dataItem) => new ChargingSession().deserialize(dataItem));
          this.propertiesToAverage.forEach((property) => {
            this.testCar[`avg${this.capitalize(property)}`] =
                this.getAverage(property, this.chargeSessions.map(
                    (session) => session[property]));
          });
          this.testCar.maxPossRangePoints.maxPoint = Math.max(
              ...this.chargeSessions.map((session) => session.maxPossRange),
          );
          this.testCar.possRangePoints.maxPoint = Math.max(
              ...this.chargeSessions.map((session) => session.possRange),
          );
          this.testCar.minPossRangePoints.minPoint = Math.min(
              ...this.chargeSessions.map((session) => session.minPossRange),
          );
          this.testCar.maxPossRangePoints.minPoint = this.testCar.avgPossRange;
        });
  };

  capitalize (string: string): string {
    return string.charAt(0).toUpperCase() + string.substring(1);
  }

  getAverage (propertyName: string, numbers: number[]): number {
    const arraySum = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    if (propertyName === this.propertiesToAverage[0] || propertyName === this.propertiesToAverage[1]) {
      return Math.round((arraySum * 10)) / 10;
    }
    return Math.round(arraySum);
  }

  getColorClass (value: number, points: RangePoints, type?: string): string {
    let className = 'cell-back__';
    if (type === 'avg') {
      let neutral = (points.maxPoint + points.minPoint) / 2;
      const quartiles = Math.round(neutral * .08);
      if (points.midPoint !== .5) {
        neutral = points.minPoint + ((points.maxPoint - points.minPoint) * points.midPoint);
      }
      if (value > neutral + quartiles) {
        return className + `blue--${this.getAlpha(value, neutral)}`;
      }
      if (value < neutral - quartiles) {
        return className + `red--${this.getAlpha(neutral, value)}`;
      }
    }
    if (type === 'max') {
      return className + `blue--${this.getAlpha(value, points.minPoint)}`;
    }
    if (type === 'min' && value < points.maxPoint) {
      return className + `red--${this.getAlpha(points.maxPoint, value)}`;
    }
    return className + 'default';
  }

  getAlpha (number: number, zero: number): number {
    const absNumber = Math.abs(number - zero);
    const modNumber = Math.round((absNumber / zero) * 100) % 5;
    return modNumber >= 2.5 ? Math.round(absNumber / 5) * 5 + 5 : Math.round(
        absNumber / 5) * 5;
  }
}
