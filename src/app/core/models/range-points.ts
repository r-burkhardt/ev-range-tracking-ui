import {Serializable} from '@app/core/serializable';


export class RangePoints implements Serializable<RangePoints>{

  constructor (
      public maxPoint = 0,
      public midPoint = .5,
      public minPoint = 0
  ) {}

  getPoints (): object {
    return {
      'maxPoint': this.maxPoint,
      'midPoint': this.midPoint,
      'minPoint': this.minPoint
    }
  }

  setPoints (points: object): void {
    const spreadKeys = Object.keys(points);
    if (spreadKeys.length) {
      spreadKeys.forEach((key) => {
        this[key] = points[key];
      })
    }
  }

  serialize (): string {
    return JSON.stringify(this);
  }

  deserialize (json: any): RangePoints {
    this.maxPoint = +json.maxPoint;
    this.midPoint = +json.midPoint;
    this.minPoint = +json.minPoint;

    return this;
  }
}
