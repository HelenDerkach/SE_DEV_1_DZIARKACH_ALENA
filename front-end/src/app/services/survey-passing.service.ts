import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {PollResponse} from '../models/pollResponse.model';

@Injectable({
  providedIn: 'root'
})
export class SurveyPassingService {

  constructor(private http: HttpClient) {
  }

  saveSurveyPassing(pollResponse: PollResponse): Observable<PollResponse> {
    return this.http.post<PollResponse>(`/api/pollResponses/new`, pollResponse)
      .pipe(map(response => {
        return response;
      }));
  }


}
