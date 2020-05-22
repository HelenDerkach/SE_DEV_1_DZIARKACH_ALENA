import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpResponse} from '@angular/common/http';
import { BehaviorSubject, Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';

import { Poll } from '../models/poll.model';
import { User } from '../models/user.model';
import { UserService } from './user-service.service';
import {pageResponse} from '../models/pageResponse.model';

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
    return this.http.get<Poll[]>(`/api/polls/all/${this.currentUser.id}`)
      .pipe(map(forms => {
        return forms;
      }));
  }

  getUserPublishedPages(pageNumber: number): Observable<pageResponse> {
    return this.http.get<pageResponse>(`/api/polls/published/userId=${this.currentUser.id}/pageNumber=${pageNumber}`)
      .pipe(map(response => {
        return response;
      }));
  }

  getAllPublishedPages(pageNumber: number): Observable<pageResponse> {
    return this.http.get<pageResponse>(`/api/polls/published/pageNumber=${pageNumber}`)
      .pipe(map(response => {
        return response;
      }));
  }

  getUserDraftsPages(pageNumber: number): Observable<pageResponse> {
    return this.http.get<pageResponse>(`/api/polls/drafts/userId=${this.currentUser.id}/pageNumber=${pageNumber}`)
      .pipe(map(response => {
        return response;
      }));
  }

  getPollById(id: string): Observable<Poll> {
    return this.http.get<Poll>(`/api/polls/${id}`)
      .pipe(map(form => {
        return form;
      }));
  }

  getPollByUrl(url: string): Observable<Poll> {
    return this.http.get<Poll>(`/api/polls?url=${url}`)
      .pipe(map(form => {
        return form;
      }));
  }

  savePoll(poll: Poll): Observable<Poll> {
    return this.http.post<Poll>(`/api/polls/new`, poll)
      .pipe(map(form => {
        return form;
      }));
  }
}
