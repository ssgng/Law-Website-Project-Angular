import { Component, OnInit } from '@angular/core';
 
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
  
   
  url="https://formsubmit.co/a2483b4f71588396f07b7f7d6d3172a2"
  fullname = '';
  email = '';
  subject = '';
  message = '';
  clickable = false


}
