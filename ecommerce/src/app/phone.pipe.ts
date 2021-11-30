import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(input:any,criteria:any): unknown {
    return this.format(input,criteria);
  }

   format(input:any,country:any){
     let phone = input.toString();
     if(phone.length ==10){
        if(country=='IN'){
          //+91-xxxxx-xxxxx
          return `+91-${input.substring(0,5)}-${input.substring(5,10)}`
        }
        else if(country=='USA'){
          //+1-xxxx-xxx-xxxx
          return `+1-${input.substring(0,3)}-${input.substring(3,6)}-${input.substring(6,10)}`
        }
     }
     return phone;

   }
  
  //xxx-xxx-xxxx

}
