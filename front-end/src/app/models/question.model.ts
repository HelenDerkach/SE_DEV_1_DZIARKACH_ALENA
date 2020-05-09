import {QuestionChoice} from './question-choice.model';
import {QuestionType} from './question-type.model';

export class Question {
  id: number;
	text: string;
	type: QuestionType;
	themeId: number;
	required: boolean;
	position: number;
	questionChoices: QuestionChoice[];
  constructor(position: number) {
    this.position = position;
  }
}
