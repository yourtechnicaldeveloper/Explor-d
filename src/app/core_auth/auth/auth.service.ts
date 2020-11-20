import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuth } from 'app/_model/user-auth';
import { environment } from 'environments/environment';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;

  constructor(private http: HttpClient, private router: Router) { }

  login(email, password) {
    return this.http.post<UserAuth>(`${environment.appUrl}/admin/login`, { email, password })
      .pipe(map(user => {
        if (user.data && user.data.token) {
          localStorage.setItem('access_token', user.data.token);
          return true;
        }
        return false;
      }));
  }
  
  public isUserLoggedIn() {
    return localStorage.getItem('access_token') !== null;
  }

  public logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }
}
