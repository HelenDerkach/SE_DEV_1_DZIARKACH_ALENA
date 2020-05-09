import { Component, OnInit, Input } from '@angular/core';
import { Poll } from '../../models/poll.model';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
	@Input()
	form: Poll;

	_form: Poll;

	ngOnInit() {

	}

	constructor (){
		this._form = this.form;
	}
}
