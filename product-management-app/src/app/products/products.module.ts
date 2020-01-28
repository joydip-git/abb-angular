import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsComponent } from './products.component';

@NgModule({
    imports:[BrowserModule],
    exports:[ProductsComponent],
    declarations:[ProductsComponent],
    providers:[],
    bootstrap:[ProductsComponent]
})
export class ProductsModule{

}