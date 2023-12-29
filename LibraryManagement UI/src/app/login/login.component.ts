import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { signin } from '../models/model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  authError: string = '';
  showLogin: boolean = true;

  constructor(private user: UserService, private router: Router) { }

  ngOnInit(): void {
    this.user.userAuthReload();
  }

  onSubmit(data: signin) {
    this.user.signIn(data);
    this.user.inValidUserAuth.subscribe((result) => {
      if (result) {
        this.router.navigate(['home/user/aboutme']);
      } else {
        this.router.navigate(['home/user/aboutme']);
      }
    });
  }

  navToSignUp(): void {
    this.router.navigate(['/signup']);
  }
}
