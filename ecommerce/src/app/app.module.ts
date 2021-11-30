import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {RouterModule} from '@angular/router';

import { ProductDetailsComponent } from 'src/app/products/product-details/product-details.component';
import { ProductsComponent } from 'src/products/products.component';
import { HeaderComponent } from '../header/header.component';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { PhonePipe } from './phone.pipe';
import { ProductsModule } from './products/products.module';
import { UserModule } from './user/user.module';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ForgotpasswordComponent } from './user/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './user/resetpassword/resetpassword.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ProductsNewComponent } from './products/products-new/products-new.component';

@NgModule({
  declarations: [
    //components
    //pipes
    //directives
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    HomeComponent,
    PhonePipe
  ],
  imports: [
    //external modules or internal moduels
    ProductsModule,
    UserModule,
    BrowserModule,
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
  providers: [
    //services will go inside the providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
