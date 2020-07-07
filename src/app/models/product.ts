import { Guid } from 'guid-typescript';
export class Product {
  id: Guid;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  imageUrl: string;

  constructor() {}
}
