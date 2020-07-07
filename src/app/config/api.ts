import { environment } from 'src/environments/environment';

export const baseUrl = environment.production
  ? 'https://localhost:44305/api'
  : 'https://localhost:44305/api';

export const featureProductsUrl = baseUrl + '/Product/FeatureProducts';
export const homePageProductsUrl = baseUrl + '/Product/HomePageProducts';
export const productsByCategoryUrl = baseUrl + '/Product/ProductsByCategory';
