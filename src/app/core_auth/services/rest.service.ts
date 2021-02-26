import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const endpoint = environment.appUrl;
const baseUrl = 'http://13.58.33.101:2000/admin/search';
const baseUrl2 = `${environment.appUrl}`;

@Injectable({
  providedIn: 'root'
})
export class RestService {
 
  constructor(private http: HttpClient) { }

 get(url): Observable<any> {
    return this.http.get<any>(endpoint + url, { headers: this.getHeader() }).pipe(
      tap((response) => console.log()),
      catchError(this.handleError<any>('get'))
    );
  }

  post(url, data?): Observable<any> {
    return this.http.post<any>(endpoint + url, JSON.stringify(data), { headers: this.getHeader() }).pipe(
      tap((response) => console.log()),
      catchError(this.handleError<any>('post'))
    );
  }

  put(url, data?): Observable<any> {
    return this.http.put<any>(endpoint + url, JSON.stringify(data), { headers: this.getHeader() }).pipe(
      tap((response) => console.log()),
      catchError(this.handleError<any>('put'))
    );
  }

  delete(url): Observable<any> {
    return this.http.delete<any>(endpoint + url, { headers: this.getHeader() }).pipe(
      tap(_ => console.log()),
      catchError(this.handleError<any>('delete'))
    );
  }

  getHeader() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', localStorage.getItem('access_token'));
    return headers;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // Let the app keep running by returning an error.
      return of(error.error as T);
    };
  }
}