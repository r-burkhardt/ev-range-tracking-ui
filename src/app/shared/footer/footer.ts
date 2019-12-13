import { Component, OnInit } from '@angular/core';
import data from '../../../assets/content/en-us-site-copy.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class Footer implements OnInit {

  globalCopy: any;

  constructor() { }

  ngOnInit() {
    this.globalCopy = data['global'];
  }

}
