import { Component, OnInit } from '@angular/core';
import { Book } from '../models/model';
import { BookService } from '../services/book.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent implements OnInit {
  bookList: Book[] | undefined
  userId: number = 0
  lentId: number = 0
  updatedBook: Book | undefined

  constructor(private books: BookService, private users: UserService, private router: Router) { }

  ngOnInit(): void {

    this.reRender();
  }

  navToHome(): void {
    this.router.navigate(['home']); 
  }

  returnBook(val: number) {
    console.log("return book id: ", val)
    this.books.getBookById(val).subscribe((result) => {
      this.userId = result.currentlyBorrowedBy ?? 0;
      this.lentId = result.lentByUserId;
      this.updatedBook = result;
      this.updatedBook.isBookAvailable = true;
      this.updatedBook.currentlyBorrowedBy = 0;
      this.books.updateBook(this.updatedBook).subscribe((result) => {

        if (result) {
          this.users.returnBook(this.userId, this.lentId).subscribe((result) => {
            if (result) {
              this.reRender();
            }
          })
        }
      })
    })
  }

  reRender() {
    if (localStorage.getItem('user')) {
      let userStore = localStorage.getItem('user');
      let userData = userStore && JSON.parse(userStore);
      let userId = userData;
      this.books.searchBookByBorrowed(userId).subscribe((result) => {
        this.bookList = result;
      })
    }
  }
}
