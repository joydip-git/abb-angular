import { Component, OnInit, OnChanges } from '@angular/core';
import { IProduct } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit, OnChanges {

    products: IProduct[];
    filterText: string = 'a';
    constructor(private ps: ProductService) {

    }
    ngOnInit() {
        console.log('init');
        const data: Observable<IProduct[]> = this.ps.getProducts();
        data.subscribe(d => this.products = d);
    }
    ngOnChanges() {

    }
    changeFilterText(eventData: any) {
        //console.log(this.filterText);
        console.log(eventData);
    }
}