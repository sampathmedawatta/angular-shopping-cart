import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { categoryUrl } from '../config/api';
import { OperationResult } from '../models/operation-result';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  result: OperationResult;
  constructor(private http: HttpClient) {}

  getCategoryList(): Observable<OperationResult> {
    return this.http.get<OperationResult>(categoryUrl);
  }
}
