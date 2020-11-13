import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';


const endpoint = environment.appUrl;
const baseUrl = 'http://18.224.173.145:2000/admin/search';
const baseUrl2 = `${environment.appUrl}`;
@Injectable({
  providedIn: 'root'
})
export class RestService {
  form: FormGroup;
  tours: any[];
  tour: any[];
  category = {
    name: '',
    icon: '',
    available: false
  };
  constructor(private http: HttpClient) { }
  find(_id, url, formData): Observable<any> {
    return this.http.get<any>(endpoint + url + _id, { headers: this.getHeader(formData) }).pipe(
      tap((response) => console.log()),
      catchError(this.handleError<any>('get'))
    );
  }

  get(url): Observable<any> {
    return this.http.get<any>(endpoint + url, { headers: this.getHeader() }).pipe(
      tap((response) => console.log()),
      catchError(this.handleError<any>('get'))
    );
  }

  post(url, data?, isFormData?): Observable<any> {
    
    let formData: any;
    if (data && isFormData) {
      // Object.keys(data).forEach((key) => { formData.append(key, data[key]) });
    }
    
    return this.http.post<any>(endpoint + url, (formData && isFormData) ? formData : JSON.stringify(data), { headers: this.getHeader(isFormData) }).pipe(
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
  

  getHeader(isFormData?) {
    let headers: HttpHeaders = new HttpHeaders();
    
    if (!isFormData) {
      headers = headers.append('Content-Type', 'json');
    }
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