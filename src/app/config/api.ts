import { environment } from 'src/environments/environment';

export const baseUrl = environment.production
  ? 'https://localhost:44306/api'
  : 'https://localhost:44306/api';

export const ProductsByType = baseUrl + '/Product/ProductsByType';
export const productsByCategoryUrl = baseUrl + '/Product/ProductsByCategory';

export const categoryUrl = baseUrl + '/Category';

export const loginUrl = baseUrl + '/User/Login';
export const registerUrl = baseUrl + '/User/Register';
export const userDetailsUrl = baseUrl + '/User/Profile';
export const refreshTokenUrl = baseUrl + '/User/RefreshToken';

export const orderUrl = baseUrl + '/Order';
export const orderByIdUrl = baseUrl + '/Order';
export const orderHistoryUrl = baseUrl + '/Order/History';
