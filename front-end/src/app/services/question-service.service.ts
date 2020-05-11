import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';
import {Observable} from 'rxjs';
import {QuestionType} from '../models/question-type.model';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  public getQuestionsTypes(): Observable<QuestionType[]> {
    return this.http.get<QuestionType[]>(`/api/questionTypes/all`)
      .pipe(map(types => {
        return types;
      }));
  }
}
