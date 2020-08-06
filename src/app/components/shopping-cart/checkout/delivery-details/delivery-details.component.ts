import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery-details',
  templateUrl: './delivery-details.component.html',
  styleUrls: ['./delivery-details.component.css'],
})
export class DeliveryDetailsComponent implements OnInit {
  userModel: User = {
    Email: '',
    FirstName: '',
    LastName: '',
    AddressLine1: '',
    AddressLine2: '',
    State: '',
    PostCode: '',
  };

  paymentModel = {
    paymentMethod: 'cc',
    isAggreed: '',
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    let user = localStorage.getItem('user');
    if (user) {
      this.userModel = JSON.parse(user);
    }
  }

  checkout() {
    console.log(this.userModel);
    console.log(this.paymentModel);
  }
}
