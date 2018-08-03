import { Component, OnInit, ViewChild, AfterContentInit, ViewContainerRef } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { CompInteractionService } from '../comp-interaction.service';
import { CampAdderService } from '../camp-adder.service';
import { FutureCampComponent } from '../future-camp/future-camp.component';
import { PastCampComponent } from '../past-camp/past-camp.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterContentInit{
  actDonImg:string;
  actDonorsCount:number;
  reviewMessage:string;
  @ViewChild(BannerComponent)banner:BannerComponent;
  @ViewChild('futureCamp', {read: ViewContainerRef}) futureCamp: ViewContainerRef;
  @ViewChild('pastCamp', {read: ViewContainerRef}) pastCamp: ViewContainerRef;

  displaymsg:string;

  constructor(private service: CompInteractionService, private adder:CampAdderService){}

  ngOnInit() {
    this.service.currentMessage.subscribe(message=>this.displaymsg=message);
  }

  ngAfterContentInit(): void {
    this.actDonImg = this.banner.activeDonorImg;
    this.actDonorsCount=this.banner.getActiveDonorCount();
  }
  incrementCount(){
    this.actDonorsCount++;
  }
  changeResult(reviewMessage:string){
    this.service.changeMessage(reviewMessage);  
  }
  addFuture(){
    this.adder.setRootViewContainerRef(this.futureCamp)
    this.adder.addDynamicComponent(FutureCampComponent);  
    }  
  addPast(){
      this.adder.setRootViewContainerRef(this.pastCamp)
      this.adder.addDynamicComponent(PastCampComponent);  
  }   
}
