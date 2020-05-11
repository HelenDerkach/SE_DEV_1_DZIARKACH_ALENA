import {Question} from './question.model';

export class QuestionChoice {
	id: number;
	question: Question;
	text: string;
  constructor(text: string) {
    this.text = text;
  }
}
