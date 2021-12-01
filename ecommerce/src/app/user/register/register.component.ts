import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/data.service';
import {FormGroup,FormControlName,FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private dataSvc:DataService,private fb:FormBuilder) { 
   this.countries = this.dataSvc.countryList;
   this.registerForm = new FormGroup({});
  }
  registerForm:FormGroup;
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email:['',Validators.required]
    })
  }

  get registerFormControls(){
    return this.registerForm.controls
  }
  register = {
    email: "",
    phone: "",
    username: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
    country: "",
    agreeTerms: false
  }
  countries = [
    { name: "India", countryCode: "IN" },
  { name: "United States", countryCode: "USA" }]
  
  registerUser() {
    console.log(this.register);
  }
  onSubmit(){}

}
