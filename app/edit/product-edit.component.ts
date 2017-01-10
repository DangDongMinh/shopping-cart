import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Subscription } from 'rxjs';
@Component({
    selector: 'product-edit-component',
    templateUrl: './app/edit/product-edit.component.html'
})
export class ProductEditComponent implements OnInit, OnDestroy {
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
    SaveForm() {
        this.productService.Update(this._id, this.product).subscribe(response => {
            if (response) {
                alert('Save success');
                this.router.navigate(['/products']);
            }
        })
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}