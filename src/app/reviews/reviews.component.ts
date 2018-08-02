import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from '../../../node_modules/rxjs';
import { CompInteractionService } from '../comp-interaction.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  DisplayMsg:string;
  constructor(private service:CompInteractionService) { }
  ngOnInit() {
    this.service.currentMessage.subscribe(message => this.DisplayMsg = message);
  }
}
