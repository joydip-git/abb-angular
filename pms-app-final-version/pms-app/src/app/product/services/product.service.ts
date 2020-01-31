import { IProduct } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductService {
  baseUrl = "http://127.0.0.1:8081/productservice";
  constructor(private http: HttpClient) {

  }

  public getProducts(): Observable<IProduct[]> {
    //console.log(this.http.get(this.baseUrl));
    return this.http.get(this.baseUrl).pipe(map(d => <IProduct[]>d))
  }

  public getProduct(pid: number): Observable<IProduct> {
    return this.http.get(this.baseUrl + '/' + pid).pipe(map(data => <IProduct>data));
  }

  public addProduct(product: IProduct): Observable<Object> {
    return this.http.post(this.baseUrl, product);
  }
  public updateProduct(product: IProduct): Observable<Object> {
    return this.http.put(this.baseUrl, product);
  }
  public deleteProduct(pid: number): Observable<Object> {
    return this.http.delete(this.baseUrl + '/' + pid);
  }
}
