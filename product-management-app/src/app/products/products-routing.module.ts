import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AddProductComponent } from './add-product/add-product.component';

export const productRoutes: Routes = [
    { path: 'products', component: ProductsComponent },
    {path:'products/:id', component: EditProductComponent},
    {path:'add', component:AddProductComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(productRoutes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule {

}