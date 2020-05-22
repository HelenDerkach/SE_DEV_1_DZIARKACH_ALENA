import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpResponse} from '@angular/common/http';
import { BehaviorSubject, Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';
import {UserService} from './user-service.service';
import {Theme} from '../models/theme.model';
import {pageResponse} from '../models/pageResponse.model';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private http: HttpClient, private userService: UserService) { }

  getAllPublicThemesPages(pageNumber: number): Observable<pageResponse> {
    return this.http.get<pageResponse>(`/api/themes/public/pageNumber=${pageNumber}`)
      .pipe(map(response => {
        return response;
      }));
  }

  saveTheme(theme: Theme): Observable<Theme> {
    return this.http.post<Theme>(`/api/themes/new`, theme)
      .pipe(map(response => {
        return response;
      }));
  }
}
