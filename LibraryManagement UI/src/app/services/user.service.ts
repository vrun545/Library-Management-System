import { Injectable, EventEmitter } from '@angular/core';
import { signin, signup, User } from '../models/model'
import { Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: any[] = [];
  private currentUser: any = null;
  inValidUserAuth = new EventEmitter<Boolean>(false);
  private baseUrl = 'https://localhost:7193/api';

  constructor(private http: HttpClient, private route: Router, private toastr: ToastrService) { }

  signUp(data: signup) {
    return this.http.post('https://localhost:7193/api/User', data);
  }

  signIn(data: signin) {
    this.http.get<signup[]>(`${this.baseUrl}/User?username=${data.username}&password=${data.password}`, { observe: 'response' })
      .subscribe(
        (result: HttpResponse<signup[]>) => {
          if (result && result.body) {
            const us = (JSON.stringify(result.body));
            const v = JSON.parse(us);
            const Id = v.id;
            localStorage.setItem('user', (Id));
            this.toastr.success('Welcome', 'Login Successful', {
              timeOut: 3000,
            });
            this.route.navigate(['home']);
          }
          else {
            this.toastr.success('Invalid Username or Password', 'Login Failed', {
              timeOut: 3000,
            });
          }
        },
        (error) => {
          this.toastr.error('Invalid Username or Password', 'Login Failed', {
            timeOut: 3000,
          });
        });
  }

  getUserbyId(id: number) {
    return this.http.get<User>(`${this.baseUrl}/User/${id}`);
  }

  returnBook(userId: number, lentId: number) {
    return this.http.get(`${this.baseUrl}/User/return/${userId}/${lentId}`);
  }

  borrowBook(userId: number, lentId: number) {
    return this.http.get(`${this.baseUrl}/User/borrow/${userId}/${lentId}`);
  }

  userAuthReload() {
    if (localStorage.getItem('user')) {
      this.route.navigate(['/']);
    }
  }

  getCurrentUser(): any {
    return this.currentUser;
  }

  isLoggedIn(): boolean {
    return this.currentUser !== null;
  }

  signOut(): void {
    this.currentUser = null;
  }
}
