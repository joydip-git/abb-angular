import { IProduct } from '../models/product.model';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ProductService {

    products: IProduct[];
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
    public getProduct(pid: number): IProduct {
        const data = this.http.get(this.url + '/' + pid);

        return null;
    }
    public addProduct(product: IProduct) {
        const header = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        this.http.post(this.url, product, { headers: header });
    }
    public deleteProduct(pid: number) {
        this.http.delete(this.url + '/' + pid);
    }
    public updateProduct(product: IProduct) {
        this.http.put(
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