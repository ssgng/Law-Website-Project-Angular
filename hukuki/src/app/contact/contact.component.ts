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
  //url="https://formspree.io/f/myyvbvaj"
  url="https://formsubmit.co/ebe1ba3593076a7ca4327043f7b54ad4"
  fullname = '';
  email = '';
  subject = '';
  message = '';
  clickable = false

  clicked() {
    console.log("clicked@!!!!! ")
  }
}
