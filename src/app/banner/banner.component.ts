import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  actDonorsCount = 2500;
  activeDonorImg = 'assets/images/Active_donors.png';
  constructor() { }

  ngOnInit() {
  }
  getActiveDonorCount():number{
    return this.actDonorsCount;
  }

}
