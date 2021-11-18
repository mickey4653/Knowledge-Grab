import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  submit(contact){

    alert(document.getElementById("successMeg").innerText);
    contact.reset();
    
    }
}
