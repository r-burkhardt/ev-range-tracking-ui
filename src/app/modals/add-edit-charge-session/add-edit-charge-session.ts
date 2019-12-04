import {Component, Input, OnInit} from '@angular/core';
// @ts-ignore
import data from 'src/assets/content/en-us-site-copy.json';
import {ChargingSession} from '@app/core/models/charging-session';

@Component({
  selector: 'app-add-edit-charge-session',
  templateUrl: './add-edit-charge-session.html',
  styleUrls: ['./add-edit-charge-session.scss']
})
export class AddEditChargeSession implements OnInit {

  @Input() sessionEdit: ChargingSession;

  chargeSessionLabels: any;
  chargeSessionCopy: any;
  globalCopy: any;

  constructor() { }

  ngOnInit() {
    this.chargeSessionLabels = data['chargeSessionLabels'];
    this.chargeSessionCopy = data['chargeSessionLabels'];
    this.globalCopy = data['global'];

    if (!this.sessionEdit) {
      this.sessionEdit = new ChargingSession(
          '',
          new Date(Date.now()),
          147.8,
          24.7,
          333,
          283,
          233,
          14568,
          ''
      );
    }
  }

  getFormTitle(): string {
    if (!this.sessionEdit.sessionId) {
      return this.chargeSessionCopy.formAddChargeSessionTitle;
    }
    return this.chargeSessionCopy.formEditChargeSessionTitle;
  }

}
