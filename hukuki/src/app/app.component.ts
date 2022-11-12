import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hukuki';
  constructor(private titleService: Title, private metaTagService: Meta) { }
  
  ngOnInit(): void {
    this.titleService.setTitle("Safa Hukuk");  
    
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Safa Hukuk' },  
      { name: 'Safa Hukuk', content: 'index, follow' }, 
      { charset: 'UTF-8' }  
    ]);  

  }
}
