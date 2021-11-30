import { NgModule } from "@angular/core";
import { ProductsNewComponent } from "./products-new/products-new.component";
import { CartComponent } from './cart/cart.component';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ProductDetailsComponent } from "./product-details/product-details.component";

@NgModule({
    declarations:[ProductsNewComponent, CartComponent,ProductDetailsComponent],
    providers:[],
    imports:[FormsModule,BrowserModule],
    exports:[ProductsNewComponent,CartComponent]
})
export class ProductsModule{

}