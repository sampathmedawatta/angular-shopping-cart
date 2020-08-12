import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { MessengerService } from 'src/app/services/messenger.service';
import { OperationResult } from 'src/app/models/operation-result';
import { AuthToken } from 'src/app/models/auth-token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formModel = {
    email: '',
    password: '',
  };

  userProfile: User;
  authToken: AuthToken;
  constructor(
    private authService: AuthService,
    private router: Router,
    private messengerService: MessengerService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('token') != null) {
      this.router.navigateByUrl('/shop');
    }
  }

  login() {
    this.authService.login(this.formModel).subscribe({
      next: (result: OperationResult) => {
        this.authToken = result.data;

        localStorage.setItem('token', this.authToken.jwtToken);
        localStorage.setItem('refreshToken', this.authToken.refreshToken);

        this.authService.getUserProfile().subscribe((user) => {
          this.userProfile = new User(user.data);

          localStorage.setItem('user', JSON.stringify(this.userProfile));
        });

        this.messengerService.sendMsgUserLogin();
        this.router.navigateByUrl('/shop');
      },
      error: (error) => {
        if (error.status == 400) {
          console.error('Incorrect login details');
        } else {
          console.error('There was an error!', error);
        }
      },
    });
  }
}
