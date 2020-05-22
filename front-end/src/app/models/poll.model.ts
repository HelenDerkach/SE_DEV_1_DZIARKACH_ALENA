import {Question} from './question.model';
import {Theme} from './theme.model';
import {User} from './user.model';

export class Poll {
	id: number;
	startsAt: string;
  endsAt: string;
	title: string;
  url: string;
	userId: number;
	description: string;
	isPublished: boolean;
	questions: Question[];
  themes: Theme[];
}
