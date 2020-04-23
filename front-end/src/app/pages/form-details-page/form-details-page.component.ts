import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Form } from '../../models/form.model';
import { Question } from '../../models/question.model';
import { ActivatedRoute} from '@angular/router';
import { Forms } from '../../mock-forms';
import { Questions } from '../../mock-questions';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form-details-page',
  templateUrl: './form-details-page.component.html',
  styleUrls: ['./form-details-page.component.css']
})
export class FormDetailsPageComponent implements OnInit { 
	currentForm: Form;
  arrowIcon = faArrowLeft;
  
	ngOnInit() {
  	
	}
  
  constructor(private activateRoute: ActivatedRoute, private _location: Location) {
	  this.currentForm = Forms.find((form)=>form.id == activateRoute.snapshot.params['id']);
  }

  back() {
    this._location.back();
  }
}
