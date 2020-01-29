import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductListPipe } from '../pipe/product-list.pipe';
import { productRoutes, ProductsRoutingModule } from './products-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';


@NgModule({
    imports: [BrowserModule, FormsModule, ProductsRoutingModule],
    exports: [ProductsComponent],
    declarations: [ProductsComponent, ProductListPipe, AddProductComponent, EditProductComponent],
    providers: [],
    bootstrap: [ProductsComponent]
})
export class ProductsModule {

}