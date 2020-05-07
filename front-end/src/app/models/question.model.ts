import {QuestionChoice} from './question-choice.model';

export class Question {
  id: number;
	text: string;
	type: string;
	formId: number;
	themeId: number;
	required: boolean;
	position: number;
  constructor(position: number) {
    this.position = position;
  }
}
