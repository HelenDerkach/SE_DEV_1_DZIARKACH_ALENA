import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private http: HttpClient) { }

  getSurveyPassingCount(id: number): Observable<number> {
    return this.http.get<number>(`/api/pollResponses/${id}/count`)
      .pipe(map(response => {
        return response;
      }));
  }

  getSurveyPassingAverageTime(id: number): Observable<number> {
    return this.http.get<number>(`/api/pollResponses/${id}/averageTime`)
      .pipe(map(response => {
        return response;
      }));
  }

  getResultsText(id: number, pageNumber: number): Observable<any> {
    return this.http.get<any>(`/api/responses/data/text/${id}/pageNumber=${pageNumber}`)
      .pipe(map(response => {
        return response;
      }));
  }

  getResultsPie(id: number): Observable<any> {
    return this.http.get<any>(`/api/responses/data/chart/${id}`)
      .pipe(map(response => {
        return response;
      }));
  }
}
