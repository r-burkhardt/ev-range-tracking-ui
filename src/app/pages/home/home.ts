import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ChargingSession} from '@app/core/models/charging-session';


@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home implements OnInit {

  chargeSessions: ChargingSession[];

  constructor(private http: HttpClient) { }

  async ngOnInit() {
    await this.http
        .get('http://localhost:4200/assets/data/charge-data.json')
        .toPromise()
        .then((data) => {
          this.chargeSessions = data.map((dataItem) => new ChargingSession().deserialize(dataItem));
          // data.forEach((dataItem) => {
          //   console.log(dataItem);
          // });
          // return true;
        });
    this.chargeSessions.forEach(item => console.log(item));
    // console.log(this.chargeSessions);
  }

}
