import { Component, OnInit } from '@angular/core';
import { BloodDonor } from '../blood-donor';
import { BloodBankApiService } from '../blood-bank-api.service';

@Component({
  selector: 'app-donor-details',
  templateUrl: './donor-details.component.html',
  styleUrls: ['./donor-details.component.css']
})
export class DonorDetailsComponent implements OnInit {
  donorList:BloodDonor[];
  disableShowButton = false;
  details: string;
  searchGroup = "O+";
  constructor(private service: BloodBankApiService) { }

  ngOnInit() {
    this.service.findAllDonors().subscribe(data=>this.donorList = data, err=>console.log(err));
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
}
