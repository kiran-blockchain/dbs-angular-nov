import {Component} from '@angular/core';

//Metadata of the component
@Component({
    selector:'app-product-details',
    templateUrl:"./product-details.component.html"
})
export class ProductDetailsComponent {
    showToggler=true;
   productDetails ={
       name:"",
       price:0,
       quantity:0
   }
   handleToggle(){
       this.showToggler=!this.showToggler;
   }

}