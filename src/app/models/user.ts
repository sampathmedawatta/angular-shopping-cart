import { Guid } from 'guid-typescript';

export class User {
  id: Guid;
  email: string;
  firstName: string;
  lastName: string;
  addressLine1: string;
  addressLine2: string;
  state: string;
  postCode: string;

  constructor(user: any) {
    this.id = user.id;
    this.email = user.email;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.addressLine1 = user.addressLine1;
    this.addressLine2 = user.addressLine2;
    this.state = user.state;
    this.postCode = user.postCode;
  }
}
