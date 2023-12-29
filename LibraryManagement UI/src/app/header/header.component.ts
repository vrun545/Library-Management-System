import { Component, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../models/model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn: boolean = false;
  profile: User | undefined;
  userList: User[] | undefined

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.router.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('user')) {
          this.isLoggedIn = true;
          let user = localStorage.getItem('user');
          let userdata = user && JSON.parse(user);
          let id = userdata;
          this.userService.getUserbyId(id).subscribe((result) => {
            this.profile = result;
          })
        }
        else {
          this.isLoggedIn = false;
        }
      }
    });
  }

  // Clearing the user data from localStorage of Browser
  userLogout() {
    localStorage.removeItem('user');
    this.router.navigate(['']);
  }
}
