import {Component} from '@angular/core';

//Metadata of the component
@Component({
    selector:'app-header',
    templateUrl:"./header.component.html",
    styleUrls:['./header.component.css']
})
export class HeaderComponent {
    title="DBS";
    navItems=[{path:"",display:"Home"},
    {path:"login",display:"Login"},
    {path:"register",display:"Register"}
]
    //TODO implement login based logic
}