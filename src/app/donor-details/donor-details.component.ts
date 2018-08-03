import { Component, OnInit } from '@angular/core';
import { BloodDonor } from '../blood-donor';
import { BloodBankApiService } from '../blood-bank-api.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { updateClassProp } from '../../../node_modules/@angular/core/src/render3/styling';

@Component({
  selector: 'app-donor-details',
  templateUrl: './donor-details.component.html',
  styleUrls: ['./donor-details.component.css']
})
export class DonorDetailsComponent implements OnInit {
  sub: any;
  id: number;
  data: any;
  msg:string;
  donorList:BloodDonor[];
  disableShowButton = false;
  details: string;
  searchGroup = "";
  editDetailsTrue:boolean;
  donor={
    id:0,
    name:'',
    mobileNumber:0,
    location:'',
    bloodGroup:''
  }
  constructor(private service: BloodBankApiService, private route:ActivatedRoute) { 
  }

  ngOnInit() {
    this.service.findAllDonors().subscribe(data=>this.donorList = data, err=>console.log(err));
    this.sub=this.route.params.subscribe(params => {
      this.msg = params['message'];
      });
      /*this.donorList=[
      {"id":101,"name":"Ramesh","mobileNumber":1234567890,"bloodGroup":"O+","location":"Delhi"},
      {"id":101,"name":"Suresh","mobileNumber":2222233333,"bloodGroup":"A+","location":"Hyderabad"},
      {"id":101,"name":"Naresh","mobileNumber":3333344444,"bloodGroup":"B+","location":"Bangalore"},
      {"id":101,"name":"Mahesh","mobileNumber":4444455555,"bloodGroup":"O-","location":"Mumbai"},
      {"id":101,"name":"Nagesh","mobileNumber":5555566666,"bloodGroup":"A-","location":"Kolkata"}
    ];*/
  }
  showDetails(donorName:string):void{
    this.details= donorName + ' Has Donated ' + this.getDetails(donorName) + ' times';
  }
  getDetails(donorName:string):string{
    let detailList=new Map<string, string>();
    detailList.set('Ramesh', '50');
    detailList.set('Suresh', '20');
    detailList.set('Nagesh', '10');
    detailList.set('Mahesh', '30');
    detailList.set('Naresh', '40');
    return detailList.get(donorName);
  }

  submit(){
    this.service.addDonor(this.donor).subscribe(resp => {
        this.donorList.push(this.donor);
    });
  }

  editDetails(donor){
    this.editDetailsTrue=true;
    this.donor.id = donor.id;
    this.donor.name = donor.name;
    this.donor.bloodGroup = donor.bloodGroup;
    this.donor.mobileNumber= donor.mobileNumber;
    this.donor.location=donor.location;
  }

  delete(donor, idx){
    this.service.removeDonor(donor).subscribe(resp => {
      //this.donorList.splice(idx,0,donor);
  });
  }

  update(donor){
    this.service.updateDonor(donor).subscribe(resp => {
      //this.donorList.splice(idx,0,donor);
  });
  }
}
