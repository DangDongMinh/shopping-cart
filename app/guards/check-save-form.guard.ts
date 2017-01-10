import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { ProductDetailComponent } from '../detail/product-detail.component';
@Injectable()
export class CheckSaveFormGuard implements CanDeactivate<ProductDetailComponent> {
    canDeactivate(component: ProductDetailComponent) {
        alert('You can not leave this page without saving data');
        return false;
    }
}