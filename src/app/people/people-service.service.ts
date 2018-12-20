import { Injectable } from '@angular/core';
import { IPerson } from './person';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError} from 'rxjs/operators';
import {Observable, ObservableInput, throwError} from 'rxjs';
@Injectable()
export class PeopleServiceService {
   readonly peopleURL = 'data/people.json';

  constructor(private http: HttpClient) { console.log('People service created');}

  getPeople(): Observable<IPerson[]> {
    return this.http.get<IPerson[]>(this.peopleURL).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse) {
    console.error(err);
    return throwError('error');
  }

}
