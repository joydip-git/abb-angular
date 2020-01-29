import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product.model';

@Pipe({
    name: 'productFilter'
})
export class ProductListPipe implements PipeTransform {

    transform(value: IProduct[], ...args: string[]): IProduct[] {

        return value && value !== null && args[0] && args[0] !== null ? value.filter(p => p.productName.toLocaleLowerCase().indexOf(args[0].toLocaleLowerCase()) !== -1) : value;
    }
}