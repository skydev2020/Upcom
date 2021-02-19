import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooModule } from '../foo/foo.module';
import { UsersComponent } from './users.component';

const routes = [
  {path: 'users', component: UsersComponent}
]

@NgModule({
  imports: [
    FooModule, RouterModule.forChild(routes)
  ],
  declarations: [UsersComponent],  
})
export class UsersModule { }
