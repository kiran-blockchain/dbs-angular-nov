import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products:any;
  constructor(private httpClient:HttpClient) { 
    this.products =[];
  }
  
  getProductsFromApi(){
    return this.httpClient.get('https://raw.githubusercontent.com/mstrutt/product-list/master/products.json')
    .toPromise();
  }
  setProducts(data:any){
    this.products =data;
  }
  getProducts(){
    return this.products;
  }
}
