import { environment } from 'src/environments/environment';

export const baseUrl = environment.production
  ? 'https://localhost:44305/api/Product'
  : 'https://localhost:44305/api/Product';

export const featureProductsUrl = baseUrl + '/FeatureProducts';
export const homePageProductsUrl = baseUrl + '/HomePageProducts';
export const productsByCategoryUrl =
  baseUrl + '/{CategoryId}/ProductsByCategory';
export const productDetailUrl = baseUrl + '/{id}';
