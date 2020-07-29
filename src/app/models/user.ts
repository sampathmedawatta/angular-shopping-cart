export class User {
  Email: string;
  FirstName: string;
  LastName: string;
  Gender: string;
  AddressLine1: string;
  AddressLine2: string;
  State: string;
  PostCode: string;

  constructor(user: any) {
    this.Email = user.email;
    this.FirstName = user.FirstName;
    this.LastName = user.LastName;
    this.Gender = user.Gender;
    this.AddressLine1 = user.AddressLine1;
    this.AddressLine2 = user.AddressLine2;
    this.State = user.State;
    this.PostCode = user.PostCode;
  }
}
