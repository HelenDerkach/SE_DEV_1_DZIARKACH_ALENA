import {PollResponse} from './pollResponse.model';
import {Question} from './question.model';

export class Response {
  id?: number;
  answer?: string;
  questionId: number;
  pollResponseId?: number;
}
