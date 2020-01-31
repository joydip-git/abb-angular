import { Component, OnInit } from '@angular/core';
import { IProduct } from '../model/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(private ps: ProductService, private router: Router) { }

  ngOnInit() {
  }
  submitProduct(frm) {
    const submittedProduct: IProduct = <IProduct>frm.value;
    this.ps.addProduct(submittedProduct).subscribe(
      (d) => console.log(d),
      (e) => console.log(e),
      () => this.router.navigate(['/products'])
    );
    //console.log(submittedProduct);
  }

}
