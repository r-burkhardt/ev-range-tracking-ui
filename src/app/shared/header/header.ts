import { Component, OnInit } from '@angular/core';
import data from '../../../assets/content/en-us-site-copy.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header implements OnInit {

  globalCopy: any;

  constructor() { }

  ngOnInit() {
    this.globalCopy = data['global'];
  }

}
