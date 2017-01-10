import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Subscription } from 'rxjs';
@Component({
    selector: 'product-detail-component',
    templateUrl: './app/detail/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit, OnDestroy {
    public _id: number;
    public subscription: Subscription;
    public product: any;
    constructor(
        private router: Router, private activatedRoute: ActivatedRoute,
        public productService: ProductService
    ) {

    }
    ngOnInit() {
        this.subscription = this.activatedRoute.params.subscribe(params => {
            this._id = params['id'];
        });

        this.productService.GetSingle(this._id).subscribe((data) => {
            this.product = data;
        });

    }
    GotoProduct() {
        this.router.navigate(['products']);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}