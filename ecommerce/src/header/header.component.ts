import { Component } from '@angular/core';
import { ProductService } from 'src/app/product.service';

//Metadata of the component
@Component({
    selector: 'app-header',
    templateUrl: "./header.component.html",
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    constructor(private productSvc: ProductService) {

    }
    mobile ="1234567890";
    title = "DBS";
    navItems = [{ path: "", display: "Home" },
    { path: "products", display: "Products" },
    { path: "login", display: "Login" },
    { path: "register", display: "Register" }
    ];
    //TODO implement login based logic
     totalProducts ={
        count:0
    }
    getTotalProducts(){
        return this.productSvc.getProducts().filter((x:any)=>x.inOrder>0).length;
        //return this.totalProducts.count;
    }
}