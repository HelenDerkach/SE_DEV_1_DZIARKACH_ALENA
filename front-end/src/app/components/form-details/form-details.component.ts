import { Component, OnInit, Input } from '@angular/core';
import { Poll } from '../../models/poll.model';
import { Question } from '../../models/question.model';


@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.css']
})
export class FormDetailsComponent implements OnInit {
  @Input()
	_currentForm: Poll;

	questions: Question[];

  constructor() {
   }

  ngOnInit(): void {
    // this.questions = Questions.filter((question) => question.formId === this._currentForm.id);
  }

}
