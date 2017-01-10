import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProductListComponent } from './product.component';
import { ProductDetailComponent } from './detail/product-detail.component';
import { CheckSaveFormGuard } from './guards/check-save-form.guard';
import { ProductEditComponent } from './edit/product-edit.component';



const routing: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'product-edit/:id', component: ProductEditComponent },
    { path: 'product-detail/:id', component: ProductDetailComponent },

]
export const appRoutes = RouterModule.forRoot(routing);