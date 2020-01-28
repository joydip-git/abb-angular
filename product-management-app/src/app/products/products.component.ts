import { Component } from '@angular/core';
import { IProduct } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html'
})
export class ProductsComponent {
    products: IProduct[];

    constructor(private ps: ProductService) {
        const data: Observable<IProduct[]> = this.ps.getProducts();
        data.subscribe(d => this.products = d);
    }
}