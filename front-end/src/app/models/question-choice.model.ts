import {Question} from './question.model';

export class QuestionChoice {
	id: number;
	questionId: number;
	text: string;
  constructor(text: string) {
    this.text = text;
  }
}
