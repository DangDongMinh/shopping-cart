import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './product.component';
import { HomeComponent } from './home.component';
import { ProductService } from './services/product.service';
import { HttpModule } from '@angular/http';
import { appRoutes } from './app.routes';
import { ProductDetailComponent } from './detail/product-detail.component';
import {CheckSaveFormGuard} from './guards/check-save-form.guard';
import { ProductEditComponent } from './edit/product-edit.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, appRoutes],
  declarations:
  [
    AppComponent,
    ProductListComponent,
    HomeComponent,
    ProductDetailComponent,
    ProductEditComponent,


  ],
  providers: [ProductService,CheckSaveFormGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
