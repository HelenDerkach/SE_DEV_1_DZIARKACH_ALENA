import {Poll} from './poll.model';
import {Response} from './response.model';

export class PollResponse {
  id: number;
  startedAt: string;
  completedAt: string;
  pollId: number;
  responses: Response[];
}
