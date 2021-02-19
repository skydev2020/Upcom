import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  
  constructor() { }
  @Input() tab: object;
  printTitle(){
    console.log(this.tab['title']);
  }
  ngOnInit(): void {
  }

}
