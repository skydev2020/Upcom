import { Component, Input, OnInit } from '@angular/core';
import {FooConfig} from './foo.config';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss']
})
export class FooComponent implements OnInit {
   
  constructor(config: FooConfig) { 
    this.prefix = config.prefix;
  }
  @Input() label: string;
  prefix: string;

  ngOnInit(): void {
  }

}
