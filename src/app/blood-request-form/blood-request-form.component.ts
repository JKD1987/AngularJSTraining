import { Component, OnInit } from '@angular/core';
import { BloodRequest } from '../blood-request';

@Component({
  selector: 'app-blood-request-form',
  templateUrl: './blood-request-form.component.html',
  styleUrls: ['./blood-request-form.component.css']
})
export class BloodRequestFormComponent implements OnInit {
  
  request:BloodRequest={id: 0,
  patientName: '',
  hospitalName: '',
  city: '',
  whenRequierd: new Date,
  reuiredBloodGroup: ''
  };
  constructor() { }

  ngOnInit() {
  }

  submit(){
    console.log(this.request);
  }
  reset(){
    this.request.id= 0;
    this.request.patientName= '';
    this.request.hospitalName= '';
    this.request.city= '';
    this.request.whenRequierd= new Date();
    this.request.reuiredBloodGroup= '';
  };
}
