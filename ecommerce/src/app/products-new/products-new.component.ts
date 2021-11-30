import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-new',
  templateUrl: './products-new.component.html',
  styleUrls: ['./products-new.component.css']
})
export class ProductsNewComponent implements OnInit {
  products: any
  constructor(private productSvc: ProductService) {
    this.fetchProductsFromService();
    if (this.products.length == 0) {
      this.loadProductsFromApi();
    }
  }
  loadProductsFromApi() {
    this.productSvc.getProductsFromApi()
      .then((result: any) => {
        console.log(result);
        if(result.length>0){
          result = result.map((item:any)=>{
            return {...item,inOrder:0}
          })
        }
        this.productSvc.setProducts(result);
        this.fetchProductsFromService();
      })
      .catch((ex: any) => {
        console.log(ex);
      })
  }
  fetchProductsFromService(){
    this.products =this.productSvc.getProducts();
  }

  ngOnInit(): void {
  }

  //add to cart
  //remove from cart
  // setProducts always need to updated.
}
