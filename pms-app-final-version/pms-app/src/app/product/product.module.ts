import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ProductListComponent } from './product-list/product-list.component';
import { StarComponent } from './star/star.component';
import { ProductService } from './services/product.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductFilterPipe } from './pipes/product-filter.pipe';

@NgModule({
  imports: [BrowserModule, HttpClientModule, FormsModule, ProductRoutingModule],
  exports: [ProductListComponent],
  declarations: [ProductListComponent, StarComponent, ProductDetailComponent, ProductAddComponent, ProductUpdateComponent, ProductFilterPipe],
  providers: [ProductService],
  bootstrap: []
})
export class ProductModule {

}
