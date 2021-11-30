import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
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
    imports: [FormsModule],
    exports: [LoginComponent, RegisterComponent, ForgotpasswordComponent, ResetpasswordComponent, ProfileComponent]
})
export class UserModule {

}