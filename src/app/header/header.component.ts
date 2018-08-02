import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  majHeading : string;
  leftLogo: string;
  rightLogo: string;
  showBorder = false;
  constructor() {
    this.majHeading = 'JD\'s Blood Bank';
    this.leftLogo='assets/images/blood-donation-logo_23-2147506524.jpg';
    this.rightLogo='assets/images/blood.png';
   }

  ngOnInit() {
  }

}
