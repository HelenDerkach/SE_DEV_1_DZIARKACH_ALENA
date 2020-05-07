import { Component, OnInit, Input } from '@angular/core';
import { Form } from '../../models/form.model';
import { Question } from '../../models/question.model';
import { Questions } from '../../mock-questions';


@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.css']
})
export class FormDetailsComponent implements OnInit {
  @Input()
	_currentForm: Form;

	questions: Question[];

  constructor() {
   }

  ngOnInit(): void {
    this.questions = Questions.filter((question) => question.formId === this._currentForm.id);
  }

}
