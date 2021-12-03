import {Component, Input} from '@angular/core';

//Metadata of the component
@Component({
    selector:'app-product-details',
    templateUrl:"./product-details.component.html"
})
export class ProductDetailsComponent {
    showToggler=true;
    @Input()
   details ={
       name:"",
       price:"",
       inOrder:""
   }
   handleToggle(){
       this.showToggler=!this.showToggler;
   }

}