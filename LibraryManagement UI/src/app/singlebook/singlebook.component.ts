import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from '../models/model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-singlebook',
  templateUrl: './singlebook.component.html',
  styleUrls: ['./singlebook.component.css']
})
export class SinglebookComponent implements OnInit {
  bookDetails: Book | undefined;
  updatedBookData: Book | undefined;
  bookpresent: boolean = true;
  bookingConfirm: boolean = false;
  notEnoughToken: boolean = false;
  borrowedBy: number | undefined;
  availableToken: number = 0;
  currentUserId: number = 0;
  myBook: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService,
    private users: UserService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const bookid = +params['bookid'];
      if (!isNaN(bookid)) {
        console.log(bookid);
        this.bookService.getBookById(bookid).subscribe(
          (result) => {
            this.bookDetails = result;
            this.reRender();
          },
          (error) => {
            console.error('Error fetching book details', error);
          }
        );
      } else {
        console.error('Invalid bookid:', params['bookid']);
      }
    });
  }

  time = () => {
    this.notEnoughToken = false;
    this.bookingConfirm = false;
  };

  BorrowNow() {
    if (this.availableToken < 1) {
      this.notEnoughToken = true;
      setTimeout(this.time, 2000);
    } else {
      this.bookingConfirm = true;
      setTimeout(this.time, 2000);
      if (this.bookDetails) {
        this.bookDetails.isBookAvailable = false;
        this.bookDetails.currentlyBorrowedBy = this.currentUserId;
        this.bookService.updateBook(this.bookDetails).subscribe((result) => {
          if (result) {
            this.users
              .borrowBook(this.currentUserId, result.lentByUserId)
              .subscribe(() => {
                this.reRender();
                alert('Successfully Borrowed Your Book');
              });
          }
        });
      }
    }
  }

  reRender() {
    if (this.bookDetails && this.bookDetails.isBookAvailable === false) {
      this.bookpresent = false;
      this.borrowedBy = this.bookDetails.currentlyBorrowedBy ?? 0;
    }
    if (localStorage.getItem('user')) {
      let userStore = localStorage.getItem('user');
      let userData = userStore && JSON.parse(userStore);
      this.currentUserId = userData;
      this.users.getUserbyId(this.currentUserId).subscribe((result) => {
        if (result) {
          this.availableToken = result.token;
          if (result.id == this.bookDetails?.lentByUserId) {
            this.myBook = true;
          }
        }
      });
    }
  }
}
