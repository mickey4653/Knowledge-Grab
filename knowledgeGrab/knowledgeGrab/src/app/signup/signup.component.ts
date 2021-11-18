import { Component, OnInit } from '@angular/core';
import { KgUserReg } from 'models/kg-user-reg';
import { KgapiserviceService } from 'services/kgApi.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
regForm:NgForm;
// user:KgUserReg= new KgUserReg();

  constructor(private _kgApiService:KgapiserviceService){}
// userInput:Observable<KgUserReg[]>;
  ngOnInit(): void {
// this.userInput= this._kgApiService.createUser();
  }

  submit(signup){
// console.log("Form submitted!", signup);
// alert(this.user.firstname + ' ' + this.user.lastname + ' ' + this.user.email + ' ' + this.user.password);


// this._kgApiService.createUser()
// .subscribe(

//   ()=>
//   console.log("Signed Up Successfully!!!", signup)
//   // alert("Signed Up Successfully!!!")
// );


  }
}
//   reset(signup){
// signup.resetForm();
//   }

// }
