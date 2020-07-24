import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Auth } from 'src/app/models/auth';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { MessengerService } from 'src/app/services/messenger.service';

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
      next: (data: any) => {
        localStorage.setItem('token', data.token);

        this.authService.getUserProfile().subscribe((user) => {
          this.userProfile = user;
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
