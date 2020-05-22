import { Component, OnInit, EventEmitter, Host, Input, Output } from '@angular/core';
import { HomepageComponent } from '../../pages/homepage/homepage.component';
import { Poll } from '../../models/poll.model';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  arrowIcon = faAngleDoubleRight;
	@Input()
	data: any;
	@Input()
  selected;

	@Output()
  	details: EventEmitter<number> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  showDetails(): void {
  	this.details.next(this.data.id);
  }
}
