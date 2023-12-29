import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { BookService } from '../services/book.service';
import { NgForm } from '@angular/forms';
import { Book } from '../models/model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})


export class AddBookComponent 
{
  addProductMessage: undefined;

  constructor(private bookService: BookService, private router: Router, private toastr: ToastrService) { }

  navToHome(): void {
    this.router.navigate(['home']);
  }

  onSubmit(data: Book, form: NgForm) {
    if (localStorage.getItem('user')) {
      let userStore = localStorage.getItem('user');
      let userData = userStore && JSON.parse(userStore);
      data.lentByUserId = userData;
    }
    this.bookService.addBook(data).subscribe((result) => {
      if (result) {
        this.toastr.success('Thank You for Contributing', 'Book Uploaded Successfully', {
          timeOut: 3000,
        });
        this.router.navigate(['/home']);
      }
      form.resetForm();
      setTimeout(() => this.addProductMessage = undefined, 2000);
    })
  }
}

