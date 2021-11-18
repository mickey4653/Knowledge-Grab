import { Component, OnInit } from '@angular/core';
import { KgUserLogin } from 'models/kg-user-login';
import { KgapiserviceService } from 'services/kgApi.service';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:NgForm;

  // user:KgUserLogin = new KgUserLogin();

  constructor(private _kgService:KgapiserviceService) { }
  // userInput:Observable<KgUserLogin[]>;
  ngOnInit(): void {
    // this._kgService.getUserDetails()
    // .subscribe(
    // data=>this.userInput=data);

}



submit(){

// alert(this.user.email + ' ' + this.user.password);
}
// reset(login){
// login.resetForm();
// }

}
