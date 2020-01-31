import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { IProduct } from '../model/product';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  filterText: string;
  productProperties: string[] = [];
  products: IProduct[];
  imgMargin = 2;
  imgWidth = 50;
  applyStyle = true;

  constructor(private ps: ProductService, private router: Router) {

  }

  changeText(arg) {
    //this.filterText = arg;
    console.log(arg);
  }
  deleteProduct(pid: number) {
    this.ps.deleteProduct(pid).subscribe(
      (d) => console.log(d),
      (e) => console.log(e),
      () => {
        this.ps.getProducts().subscribe(
          (data: IProduct[]) => this.products = data,
          (err) => console.log(err)
        );
      });
  }
  ngOnInit() {
    this.ps.getProducts().subscribe(
      (data: IProduct[]) => this.products = data,
      (err) => console.log(err),
      () => {
        const single = this.products[0];
        for (const propertyName in single) {
          this.productProperties.push(propertyName);
        }
      }
    );
  }

  updateProductRating(pid: number, arg: any): void {
    this.products.find(p => p.productId === pid).starRating = arg;
    console.log(this.products.find(p => p.productId === pid).starRating);
    //console.log(arg);
  }

  goToProductDetail(id: number) {
    //this.router.navigate(['/products', id])
    this.router.navigateByUrl("/products/" + id);
  }
}
