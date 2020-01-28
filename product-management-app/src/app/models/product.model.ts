export interface IProduct {
    productName: string;
    productId: number;
    productCode: string;
    releaseDate: string;
    description: string;
    price: number;
    imageUrl: string;
    starRating: number;
}

/*
export class Product {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    description: string;
    price: number;
    starRating: number;
    imageUrl: string;

    constructor(pid: number, pname: string, pcode: string, date: string, desc: string, price: number, rating: number, imgUrl: string) {
        this.productId = pid;
        this.productName = pname;
        this.description = desc;
        this.releaseDate = date;
        this.price = price;
        this.starRating = rating;
        this.imageUrl = imgUrl;
        this.productCode = pcode;
    }
  }
  */