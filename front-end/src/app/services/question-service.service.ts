import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';
import { QuestionChoice } from '../models/question-choice.model';
import { Questions } from '../mock-questions';
import { Choices } from '../mock-options';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  questions: Question[];
  choices: QuestionChoice[];

  constructor() { }

  public getQuestions(formId: number) {
    return Questions.filter((question) => question.formId == formId);
  }

  public getOptions(questionId: number) {
    return Choices.filter((option) => option.questionId == questionId);
  }
  // TODO save, update methods
}
