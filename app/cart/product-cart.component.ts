/*import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'cart',
  templateUrl: './app/product-cart.component.html'
})
export class ProductCartComponent implements OnInit {
  public _id: number;
  public product: any;
  constructor(
    private router: Router, private activatedRoute: ActivatedRoute,
    public productService: ProductService
  ) {

  }
  ngOnInit() {
    this.cart.getCart()
      .then(products => {
        products.forEach(product => {
          this.product.push(product)
        })

        this.getTotalPrice()

      })
  }

  GotoProduct() {
    this.router.navigate(['products']);
  }
  getTotalPrice() {
    let total = this.product.reduce((total, product) => {
      total += product.price;
      let str = total.toString()
      let result = str.slice(0, str.indexOf('.') + 3)
      result = parseFloat(result)
      return result;
    }, 0)

    this.totalPrice = total;
  }
}
*/