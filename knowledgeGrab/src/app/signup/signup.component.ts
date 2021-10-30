import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
// export class SignupComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
export class SignupComponent {


  submit(login){
console.log("Form submitted!", login);

  }

}