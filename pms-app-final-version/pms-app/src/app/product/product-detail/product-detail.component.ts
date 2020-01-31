import { Component, OnInit } from '@angular/core';
import { IProduct } from '../model/product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router, Params, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: IProduct;
  constructor(private ps: ProductService, private route: ActivatedRoute, private router: Router, private loc: Location) { }

  ngOnInit() {
    /*
    const allParamaters: Observable<ParamMap> = this.route.paramMap;
    allParamaters
      .pipe(
        switchMap((p: ParamMap) => {
          return this.ps.getProduct(+p.get('id'))
        }))
      .subscribe(
        (data) => this.product = data,
        (err) => console.log(err)
      );
*/
    /*
        const allParameters: Observable<Params> = this.route.params;
        allParameters.subscribe(
          (p: Params) => {
            const pid: number = (+p['id']);
            this.ps.getProduct(pid).subscribe(
              (data: IProduct) => this.product = data,
              (err) => console.log(err)
            )
          },
          (err) => console.log(err)
        );
        */
    const allParameters: Observable<Params> = this.route.params;
    allParameters.pipe(switchMap((ps: Params) => this.ps.getProduct(+ps['id']))).subscribe(
      (data: IProduct) => this.product = data,
      (err) => console.log(err));

  }

  goBack() {

    this.router.routerState.root
    // this.router.navigate(['/products']);
    this.loc.back();
  }

}
