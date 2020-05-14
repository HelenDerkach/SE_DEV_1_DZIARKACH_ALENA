import {Question} from './question.model';

export class Theme {
	id: number;
	title: string;
  is_private: boolean;
	userId: number;
	questions: Question[];
}
