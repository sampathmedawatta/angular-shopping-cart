import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ProductsByType, productsByCategoryUrl } from 'src/app/config/api';

import {} from 'src/app/config/api';

import { from } from 'rxjs';
import { Guid } from 'guid-typescript';
import { OperationResult } from '../models/operation-result';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProductsByCategory(categoryName: string): Observable<OperationResult> {
    return this.http.get<OperationResult>(
      productsByCategoryUrl + '/' + categoryName
    );
  }

  getFeatureProducts(): Observable<OperationResult> {
    return this.http.get<OperationResult>(ProductsByType + '/FeatureProducts');
  }

  getHomePageProducts(): Observable<OperationResult> {
    return this.http.get<OperationResult>(ProductsByType + '/HomePageProducts');
  }
}
