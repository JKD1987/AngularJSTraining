import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  designedBy:string;
  copyRight:string;
  twitterImg:string;
  fbImg:string;
  constructor() { 
    this.designedBy = 'Designed by: Dreamworks media Ltd.';
    this.copyRight = 'CopyRight: 2018-2022';
    this.twitterImg='assets/images/facebookImg.jpg';
    this.fbImg = 'assets/images/twitter-logo.png';
  }
  ngOnInit() {
  }

}
