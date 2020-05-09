import {Question} from './question.model';
import {Theme} from './theme.model';

export class Poll {
	id: number;
	starts_at: string;
  ends_at: string;
	title: string;
	userId: number;
	description: string;
	is_published: boolean;
	questions: Question[];
  themes: Theme[];
}
