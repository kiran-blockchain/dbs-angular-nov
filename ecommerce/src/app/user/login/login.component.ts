import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataSvc:DataService) { 
    console.log(this.dataSvc.countryList)
  }

  ngOnInit(): void {
  }

}
