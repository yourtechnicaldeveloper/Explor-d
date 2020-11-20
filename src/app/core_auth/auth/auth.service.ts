import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuth } from 'app/_model/user-auth';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject: BehaviorSubject<UserAuth>;
    public user: Observable<UserAuth>;


  constructor(private http: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject<UserAuth>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
   }
   public get userValue(): UserAuth {
    return this.userSubject.value;
}

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
