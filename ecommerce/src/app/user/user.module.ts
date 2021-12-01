import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ForgotpasswordComponent } from "./forgotpassword/forgotpassword.component";
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from "./register/register.component";
import { ResetpasswordComponent } from "./resetpassword/resetpassword.component";

@NgModule({
    declarations:
     [LoginComponent, 
        RegisterComponent,
         ForgotpasswordComponent,
          ResetpasswordComponent, ProfileComponent],
    providers: [],
    imports: [FormsModule,BrowserModule,ReactiveFormsModule],
    exports: [LoginComponent, RegisterComponent, ForgotpasswordComponent, ResetpasswordComponent, ProfileComponent]
})
export class UserModule {

}