import { Component, OnInit } from '@angular/core';
import { Form } from '../../models/form.model';
import { Question } from '../../models/question.model';
import { ActivatedRoute} from '@angular/router';
import { Forms } from '../../mock-forms';
import { Questions } from '../../mock-questions';


@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.css']
})
export class FormDetailsComponent implements OnInit {

	currentForm: Form;
	responses: number;
	averageTime: number;
	questions: Question[];

  constructor(private activateRoute: ActivatedRoute) {
  	this.currentForm = Forms.find((form)=>form.id == activateRoute.snapshot.params['id']);
  	this.responses = 15;
  	this.averageTime = 8;
  	this.questions = Questions.filter((question)=>question.id == this.currentForm.id);
   }

  ngOnInit(): void {
  }

}
