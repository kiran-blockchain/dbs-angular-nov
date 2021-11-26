import {Component} from '@angular/core';

//Metadata of the component
@Component({
    selector:'app-header',
    templateUrl:"./header.component.html",
    styleUrls:['./header.component.css']
})
export class HeaderComponent {
    title="DBS";
    navitems =["Home",
    "Sports",
    "Apparel","Cars","Bikes","Watches"];

}