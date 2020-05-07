import {Question} from './question.model';

export class Theme {
	id: number;
	title: string;
	isPrivate: boolean;
	userId: number;
	questions: Question[];
}
