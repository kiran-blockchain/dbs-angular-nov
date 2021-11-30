import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//Service Decorator
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public countryList:any
  constructor(private httpClient:HttpClient) { 
    this.countryList =[];
    this.fetchCountryList();
  }
  fetchCountryList(){
    if(this.countryList.length==0){
      this.httpClient.get("https://restcountries.com/v2/all").toPromise()
      .then((x:any)=>{
        console.log(x);
        this.countryList =[];
        for(let i=0;i<x.length;i++){
          this.countryList.push({name:x[i].name, countryCode:x[i].alpha3Code})
        }
      }).catch(ex=>{
        console.log(ex);
      });
    }
    else{
      return this.countryList;
    }
  }
 getCountryList(){
   return this.countryList;
 }

}
