import { ProductService } from "./product.service";




describe('Testing service using plain jasmine', () => {
  let httpclientspy: { get: jasmine.Spy };
  let ps: ProductService;
  beforeEach(() => {
    httpclientspy = jasmine.createSpyObj('HttpClient', ['get']);
    ps = new ProductService(<any>httpclientspy);

  })
  it('shoule get 5 products', () => {
    let count: number;
    ps.getProducts().subscribe(
      data => count = data.length,
      (err) => console.log(err),
      () => expect(count).toEqual(5)
    );

  });
});
