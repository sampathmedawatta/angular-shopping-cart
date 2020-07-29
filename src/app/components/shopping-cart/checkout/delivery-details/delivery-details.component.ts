import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery-details',
  templateUrl: './delivery-details.component.html',
  styleUrls: ['./delivery-details.component.css'],
})
export class DeliveryDetailsComponent implements OnInit {
  user: User;
  constructor(private router: Router) {}

  ngOnInit(): void {
    let user = localStorage.getItem('user');
    if (user) {
      //TODO load user details to delivert details
      this.user = JSON.parse(user);
    } else {
      //TODO handle user login
      //this.router.navigateByUrl('/login');
    }
  }
}
