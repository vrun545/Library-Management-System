import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private baseUrl = 'https://localhost:7193/api';
  constructor(private http: HttpClient) { }

  signUp(signUpRequest: any): Observable<any> {
    const url = `${this.baseUrl}/User`;

    return this.http.post(url, signUpRequest).pipe(
      catchError(this.handleError)
    );
  }

  signIn(signInRequest: any): Observable<any> {
    const url = `${this.baseUrl}/User/signin`;

    return this.http.post(url, signInRequest).pipe(
      catchError(this.handleError)
    );
  }

  addProduct(product: any): Observable<any> {
    const url = `${this.baseUrl}/Books`;
    return this.http.post(url, product).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('API error:', error);
    return throwError('Something went wrong. Please try again later.');
  }
}
