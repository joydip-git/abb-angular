import { IProduct } from '../models/product.model';
import { Status } from '../models/status.model';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable({
    providedIn: 'root'
})
export class ProductService {
    url: string = "http://localhost:8081/productservice";

    constructor(private http: HttpClient) {

    }

    public getProducts(): Observable<IProduct[]> {
        const data: Observable<IProduct[]> = this.http.get<IProduct[]>(this.url);
        return data;
        // return data.pipe(
        //     map(
        //         (resp) =>
        //             <IProduct[]>resp)
        // );
    }

    public getProduct(pid: number): Observable<IProduct> {
        const data: Observable<IProduct> = this.http.get<IProduct>(this.url + '/' + pid);
        return data;
    }

    public addProduct(product: IProduct): Observable<Status> {
        const header = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return this.http.post<Status>(this.url, product, { headers: header });
    }

    public deleteProduct(pid: number): Observable<Status> {
        return this.http.delete<Status>(this.url + '/' + pid);
    }

    public updateProduct(product: IProduct)
        : Observable<Status> {
        return this.http.put<Status>(
            this.url,
            product,
            {
                headers: new HttpHeaders(
                    {
                        'Content-Type': 'application/json'
                    })
            }
        );
    }

}
/*
function func(fn: (x: number, y: number) => number, ...parameters: number[])
    : number {
    return fn(parameters[0], parameters[1]);
}
const func=(fn: (x: number, y: number) => number, ...parameters: number[])
    : number =>
    return fn(parameters[0], parameters[1]);
const add = (a, b) => (a + b);
func(add, 10, 20);
*/