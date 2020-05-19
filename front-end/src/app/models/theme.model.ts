import {Question} from './question.model';
import {Poll} from './poll.model';
import {User} from './user.model';

export class Theme {
	id: number;
	title: string;
  is_private: boolean;
	user: User;
	poll: Poll;
	questions: Question[];
}
