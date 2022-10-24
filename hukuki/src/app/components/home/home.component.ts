import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
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
  slidesStore = [
    { "src": "../../../assets/img/banner-1.png", "title": "this is title","id":"1" },
    { "src": "../../../assets/img/banner-2.png", "title": "this is titles4" ,"id":"2" },
    { "src": "../../../assets/img/banner-1.png","title":"this is title3","id":"3"  }
  
  ]
  
  getValues(c:any ) {
   console.log("function running!!")
    
   // console.log(c.Subject)
  }
  customOptions: OwlOptions = {
    autoHeight: true,
 
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: [ '<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>"' ],
    autoplay:true,
     
    responsive: {
      0: {
        items: 1
      } 
    },
    nav: true,
    
  }


}
