import {Component} from '@angular/core';


//Metadata of the component
@Component({
    selector:'app-products',
    templateUrl:"./products.component.html",
    styleUrls:['./products.component.css']
})
export class ProductsComponent {
    title="Products";
    total ={
        quantity:0,
        totalPrice:0
    }
    products = [{
        name:"iphone",
        id:1,
        price:1000,
        quantityInOrder:0,
        totalPrice:0
    },
    {
        name:"Samsung",
        id:2,
        price:2000,
        quantityInOrder:0
    }];

    addToCart(product:any){
        product.quantityInOrder+=1;
        product.totalPrice = product.quantityInOrder*product.price;
        this.getTotal();
    }
    getTotal (){
        this.total.totalPrice=0;
        this.total.quantity=0;
        this.products.forEach(item=>{
           this.total.totalPrice+= item.totalPrice?item.totalPrice:0;
           this.total.quantity += item.quantityInOrder
        })
    }
}