import { Component, OnInit } from '@angular/core';
import { Camp } from '../camp';

@Component({
  selector: 'app-future-camp',
  templateUrl: './future-camp.component.html',
  styleUrls: ['./future-camp.component.css']
})
export class FutureCampComponent implements OnInit {

  upcomingList:Camp[];
  constructor() { }

  ngOnInit() {
    this.upcomingList = [new Camp('Chennai', new Date(2018, 8, 19), 2700), new Camp('Hyderabad', new Date(2018, 9, 21), 2800), new Camp('Pune', new Date(2018, 10, 29), 4200)];
  }

}
