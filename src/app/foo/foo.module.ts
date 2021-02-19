import { NgModule } from '@angular/core';
import { FooComponent } from './foo.component';
import {FooConfig} from './foo.config';

@NgModule({
  declarations: [
    FooComponent    
  ],
  exports: [FooComponent],
  providers: [{
    provide: FooConfig, useValue: {
      prefix: 'Default previx'
    }
  }]
})
export class FooModule { }
