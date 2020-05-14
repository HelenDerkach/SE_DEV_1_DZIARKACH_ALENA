import {Component, Input, OnInit} from '@angular/core';
import {Question} from '../../models/question.model';
import {Response} from '../../models/response.model';

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

  constructor() { }

  ngOnInit(): void {
  }

}
