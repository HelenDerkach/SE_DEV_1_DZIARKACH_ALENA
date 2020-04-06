import { Component, OnInit, Host, Input, Output } from '@angular/core';
import { HomepageComponent } from '../../pages/homepage/homepage.component';
import { Form } from '../../models/form.model';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

	arrowIcon = faAngleDoubleRight;
	@Input() 
	_form: Form;

  constructor() { }

  ngOnInit(): void {
  }

}
