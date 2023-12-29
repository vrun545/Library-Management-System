import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { signup } from '../models/model';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent {
  username: string | undefined;
  password: string | undefined;
  name: string | undefined;

  constructor(private user: UserService, private router: Router) { }

  signUp(data: signup) {
    this.user.signUp(data).subscribe((result) => {
      if (result) {
        this.router.navigate(['']);
      }
    })
  }

  navToLogin(): void {
    this.router.navigate(['']);
  }
}