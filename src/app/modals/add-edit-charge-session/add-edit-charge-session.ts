import {Component, Input, OnInit} from '@angular/core';
// @ts-ignore
import data from 'src/assets/content/en-us-site-copy.json';
import {ChargingSession} from '@app/core/models/charging-session';
import {MatDatepickerInputEvent} from '@angular/material';


@Component({
             selector: 'app-add-edit-charge-session',
             templateUrl: './add-edit-charge-session.html',
             styleUrls: ['./add-edit-charge-session.scss'],
           })
export class AddEditChargeSession implements OnInit {

  @Input() sessionEdit: ChargingSession;

  chargeSessionLabels: any;
  chargeSessionCopy: any;
  globalCopy: any;

  newChargeDate: Date; // = new Date(Date.now());
  newDistanceTraveled: number;
  newEnergyUsed: number;
  newMaxPossRange: number;
  newPossRange: number;
  newMinPossRange: number;
  newOdometerReading: number;
  newNotes: string;

  constructor () { }

  ngOnInit () {
    this.chargeSessionLabels = data['chargeSessionLabels'];
    this.chargeSessionCopy = data['chargeSessionCopy'];
    this.globalCopy = data['global'];

    if (this.sessionEdit) {
      this.newChargeDate = this.sessionEdit.chargeDate;
      this.newDistanceTraveled = this.sessionEdit.distanceTraveled;
      this.newEnergyUsed = this.sessionEdit.energyUsed;
      this.newMaxPossRange = this.sessionEdit.maxPossRange;
      this.newPossRange = this.sessionEdit.possRange;
      this.newMinPossRange = this.sessionEdit.minPossRange;
      this.newOdometerReading = this.sessionEdit.odometerReading;
      this.newNotes = this.sessionEdit.notes;
      // this.sessionEdit = new ChargingSession(
      //     '',
      //     new Date(Date.now()),
      //     147.8,
      //     24.7,
      //     333,
      //     283,
      //     233,
      //     14568,
      //     ''
      // );
    }
  }

  getFormTitle (): string {
    if (!this.sessionEdit) {
      return this.chargeSessionCopy.formAddChargeSessionTitle;
    }
    return this.chargeSessionCopy.formEditChargeSessionTitle;
  }

  // addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
  //   this.events.push(`${type}: ${event.value}`);
  // }

}
