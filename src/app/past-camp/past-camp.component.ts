import { Component, OnInit } from '@angular/core';
import { Camp } from '../camp';

@Component({
  selector: 'app-past-camp',
  templateUrl: './past-camp.component.html',
  styleUrls: ['./past-camp.component.css']
})
export class PastCampComponent implements OnInit {
  pastCampList:Camp[];
  constructor() { }

  ngOnInit() {
    this.pastCampList = [new Camp('Chennai', new Date(2018, 7, 16), 1500), new Camp('Hyderabad', new Date(2018, 4, 26), 2800), new Camp('Pune', new Date(2018, 3, 12), 3600)];
  }

}
