import {Poll} from './poll.model';
import {Response} from './response.model';

export class PollResponse {
  id: number;
  started_at: string;
  completed_at: string;
  poll:Poll;
  responses: Response[];
}
