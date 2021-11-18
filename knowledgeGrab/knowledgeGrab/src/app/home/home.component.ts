import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
courses =[
{title:"Gifts", content:"Sample text. Click to select the text box. Click again or double click to start editing the text."},
{title:"Design", content:"Sample text. Click to select the text box. Click again or double click to start editing the text."},
{title:"No coding", content:"Sample text. Click to select the text box. Click again or double click to start editing the text."},
{title:"500+ Sites", content:"Sample text. Click to select the text box. Click again or double click to start editing the text."},
{title:"Approach", content:"Sample text. Click to select the text box. Click again or double click to start editing the text."},
{title:"Quality", content:"Sample text. Click to select the text box. Click again or double click to start editing the text."},
];



  constructor() { }

  ngOnInit(): void {
  }
submit(contact){

alert(document.getElementById("successMeg").innerText);
contact.reset();

}

}
