import { NgModule } from '@angular/core';
import { FooComponent } from './foo.component';

@NgModule({
  declarations: [
    FooComponent    
  ],
  exports: [FooComponent]
})
export class FooModule { }
