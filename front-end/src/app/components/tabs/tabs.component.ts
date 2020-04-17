import { Component, OnInit, Input } from '@angular/core';
import { Form } from '../../models/form.model';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
	@Input()
	form: Form;

	_form: Form;

	ngOnInit() {

	}

	constructor (){
		this._form = this.form;
	}
}
