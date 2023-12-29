import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Book } from '../models/model';


@Injectable({
  providedIn: 'root'
})

export class BookService {

  constructor(private http: HttpClient, private route: Router) { }
  private baseUrl = 'https://localhost:7193/api';

  addBook(bookData: Book) {
    return this.http.post(`${this.baseUrl}/Books`, bookData);
  }

  getbookall() {
    return this.http.get<Book[]>(`${this.baseUrl}/Books`)
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}/Books/${id}`);
  }

  updateBook(data: Book) {
    console.log("update book api value ", data);
    return this.http.put<Book>(`${this.baseUrl}/Books/${data.bookid}`, data);
  }

  searchBookByLentId(val: number): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/Books/searchmybooks/${val}`);
  }

  searchBookByBorrowed(val: number) {
    return this.http.get<Book[]>(`${this.baseUrl}/Books/search/${val}`);
  }
}
