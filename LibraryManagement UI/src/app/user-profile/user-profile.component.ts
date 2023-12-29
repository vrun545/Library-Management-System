import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/model';
import { UserService } from '../services/user.service';
import { BookService } from '../services/book.service';
import { Book } from '../models/model';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent 
{
  bookList: Book[] | undefined
  profile: User | undefined;
  availableToken: number = 0;

  constructor(private router: Router, private users: UserService  , private bookservice : BookService) { }

  navToHome(): void {
    this.router.navigate(['home']); 
  }

  ngOnInit(): void
  {
    this.reRender();
    if (localStorage.getItem('user'))
    {
      let user = localStorage.getItem('user');
      let userdata = user && JSON.parse(user);
      let id = userdata;
      this.users.getUserbyId(id).subscribe((result) => {
        this.profile = result;
      })
    }
  }
  

  reRender() {
    if (localStorage.getItem('user')) {
      let userStore = localStorage.getItem('user');
      let userData = userStore && JSON.parse(userStore);
      let userId = userData
      this.bookservice.searchBookByLentId(userId).subscribe((result) => {
        this.bookList = result;
      });
    }
  }
}  
