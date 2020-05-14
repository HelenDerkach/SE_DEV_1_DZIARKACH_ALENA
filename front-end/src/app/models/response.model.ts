import {PollResponse} from './pollResponse.model';
import {Question} from './question.model';

export class Response {
  id?: number;
  answer?: string;
  question: Question;
  pollResponse: PollResponse;
}
