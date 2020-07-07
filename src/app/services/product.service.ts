import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { featureProductsUrl } from 'src/app/config/api';
import { homePageProductsUrl } from 'src/app/config/api';
import { productsByCategoryUrl } from 'src/app/config/api';
import { productDetailUrl } from 'src/app/config/api';

import { from } from 'rxjs';
import { Guid } from 'guid-typescript';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProductsByCategory(id: Guid): Observable<Product[]> {
    return this.http.get<Product[]>(productsByCategoryUrl);
  }

  getFeatureProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(featureProductsUrl);
  }

  getHomePageProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(homePageProductsUrl);
  }

  getProductDetail(id: Guid): Observable<Product[]> {
    return this.http.get<Product[]>(productDetailUrl);
  }
}
