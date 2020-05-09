import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpResponse} from '@angular/common/http';
import { BehaviorSubject, Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';

import { Poll } from '../models/poll.model';
import { User } from '../models/user.model';
import { UserService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class PollService {
  userForms: Poll[];
  currentUser: User;
  currentUserId: number;
  form: Poll;

  constructor(private http: HttpClient, private userService: UserService) {
    this.currentUser = userService.currentUserValue;
  }

  getUserPolls(): Observable<Poll[]> {
    return this.http.get<Poll[]>(`/api/polls/all/` + this.currentUser.id )
      .pipe(map(forms => {
        return forms;
      }));
  }

  getPollById(id: string): Observable<Poll> {
    return this.http.get<Poll>(`/api/polls/` + id )
      .pipe(map(form => {
        return form;
      }));
  }
}
