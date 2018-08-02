import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.css']
})
export class RequestDetailsComponent implements OnInit {
  @Input() requiredGroup:string;
  @Input() requiredDate:Date;
  @Input() requiredLocation:string;
  @Output() event:EventEmitter<String> = new EventEmitter();
  show=false;
  constructor() { }

  ngOnInit() {
  }

  send(){
    this.event.emit('*Results returned');
    this.show=true;
  }

}
