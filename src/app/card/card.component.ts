import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  constructor() { }
  titleText = 'User Data123';
  currentYear() {
    return (new Date()).getFullYear();
  }
  ngOnInit(): void {
  }

}
