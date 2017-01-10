import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'home-component',
    template: `
    <h2>This is home component</h2>
    <button (click)="GotoProduct()">Go to products</button>
    `
})
export class HomeComponent{
    constructor(private router: Router) {

    }

    GotoProduct(){
        this.router.navigate(['products']);
    }
}