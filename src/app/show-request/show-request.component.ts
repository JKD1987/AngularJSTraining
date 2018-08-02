import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-request',
  templateUrl: './show-request.component.html',
  styleUrls: ['./show-request.component.css']
})
export class ShowRequestComponent implements OnInit {
  avlblGrps = ['O+','A+', 'B+', 'O-', 'B-', 'A-', 'AB+']
  reqGrp:string;
  reqDate:Date;
  reqLoc:string;
  msg:string;
  constructor() { 
  }
  ngOnInit() {
  }
  onChange(val){
    this.msg= val;
  }

}
