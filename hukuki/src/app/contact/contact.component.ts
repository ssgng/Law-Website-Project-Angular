import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  //url="https://formsubmit.co/ebe1ba3593076a7ca4327043f7b54ad4"
  url="https://formsubmit.co/a2483b4f71588396f07b7f7d6d3172a2"
  fullname = '';
  email = '';
  subject = '';
  message = '';
  clickable = false

 
}
