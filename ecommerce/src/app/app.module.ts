import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {RouterModule} from '@angular/router';

import { ProductDetailsComponent } from 'src/product-details/product-details.component';
import { ProductsComponent } from 'src/products/products.component';
import { HeaderComponent } from '../header/header.component';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ProductsNewComponent } from './products-new/products-new.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductDetailsComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    ProfileComponent,
    HomeComponent,
    ProductsNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"login",component:LoginComponent},
      {path:"register",component:RegisterComponent},
      {path:"forgotpassword",component:ForgotpasswordComponent},
      {path:"reset",component:ResetpasswordComponent},
      {path:"profile",component:ProfileComponent},
      {path:"home",component:HomeComponent},
      {path:"products",component:ProductsNewComponent},
      {path:"",component:HomeComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
