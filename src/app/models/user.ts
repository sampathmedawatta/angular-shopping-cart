import { Guid } from 'guid-typescript';

export class User {
  Id: Guid;
  Email: string;
  FirstName: string;
  LastName: string;
  AddressLine1: string;
  AddressLine2: string;
  State: string;
  PostCode: string;

  constructor(user: any) {
    this.Id = user.id;
    this.Email = user.email;
    this.FirstName = user.firstName;
    this.LastName = user.lastName;
    this.AddressLine1 = user.addressLine1;
    this.AddressLine2 = user.addressLine2;
    this.State = user.state;
    this.PostCode = user.postCode;
  }
}
