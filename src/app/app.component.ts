import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Test';
  tabs=[];

  ngOnInit() {
    this.tabs = [
      {title: "First Tab Title", content: "First Tab Content"},
      {title: "Second Tab Title", content: "Second Tab Content"},
      {title: "Third Tab Title", content: "Third Tab Content"}
    ];
  }
}
