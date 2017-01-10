import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    selector: 'product-list',
    templateUrl: './app/product.component.html',
})
export class ProductListComponent implements OnInit {
    public products: any[];
    public pages: number[];
    public currentPage: number;
    public keyword: string;
    constructor(private productService: ProductService,
        private router: Router, private activatedRouter: ActivatedRoute
    ) {

    }
    ngOnInit() {
        this.activatedRouter.queryParams.subscribe(params => {
            this.currentPage = params['pageNumber'] || 1;
            console.log(this.currentPage);
            console.log(params['filter']);
        });
        this.LoadData();

    }
    Search() {
        this.productService.Search(this.keyword).subscribe((response: any) => {
            this.products = response;
            console.log(response);
        }, error => {
            console.log(error);
        });
    }
    Delete(id: number) {
        let confirmResult = confirm("Are you sure to delete product?");
        if (confirmResult) {
            this.productService.Delete(id).subscribe(response => {
                if (response) {
                    alert('Delete ok');
                    this.LoadData();

                }
            })
        }
    }
    LoadData() {
        this.productService.GetList().subscribe((response: any) => {
            this.products = response;
            console.log(response);
        }, error => {
            console.log(error);
        });
    }
}