import { environment } from 'src/environments/environment';

export const baseUrl = environment.production
  ? 'http://api.shopingcart.com'
  : 'http://localhost:3000';

export const productsUrl = baseUrl + '/products';
