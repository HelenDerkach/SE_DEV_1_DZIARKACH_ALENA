import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from '../../models/question.model';
import {Response} from '../../models/response.model';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {QuestionChoice} from '../../models/question-choice.model';

@Component({
  selector: 'app-survey-question',
  templateUrl: './survey-question.component.html',
  styleUrls: ['./survey-question.component.css']
})
export class SurveyQuestionComponent implements OnInit {
  @Input()
  question: Question;
  @Input()
  response: Response;
  data;
  @Output()
  valid = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    this.data = new FormGroup({
      answer: new FormControl('',
        this.question.isRequired ? [Validators.required, Validators.minLength(2)] : Validators.minLength(2)),
      // answers: new FormArray(new FormGroup({value: new FormControl('')}))
    });
    this.valid.emit(false);
    this.onChanges();
    this.onFormValidation();
  }

  onChanges(): void {
    this.data.statusChanges.subscribe(val => {
      this.onFormValidation();
    });
  }

  onFormValidation(): void {
    if (this.data.valid) {
      this.valid.emit(true);
      this.response.answer = this.data.value.answer;
    } else {
      this.valid.emit(false);
    }
  }

}
