import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Auth } from 'src/app/models/auth';
import { Router } from '@angular/router';

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
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('token') != null) {
      this.router.navigateByUrl('/shop');
    }
  }

  login() {
    this.authService.login(this.formModel).subscribe({
      next: (data: any) => {
        //save token
        //localStorage.setItem('token', data.token);
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
