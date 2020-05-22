import {Question} from './question.model';
import {Poll} from './poll.model';
import {User} from './user.model';

export class Theme {
	id: number;
	title: string;
  isPrivate: boolean;
	userId: number;
	pollId: number;
	questions: Question[];
}
