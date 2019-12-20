import {Component, Input, OnInit} from '@angular/core';
import {RangePoints} from '@app/core/models/range-points';

@Component({
  selector: 'ev-table',
  templateUrl: './ev-table.html',
  styleUrls: ['./ev-table.scss']
})
export class EVTable implements OnInit {

  @Input() data: any;
  @Input() config: object;
  @Input() pagination: object;


  constructor() { }

  ngOnInit() {
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
