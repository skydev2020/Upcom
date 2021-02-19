import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooModule } from '../foo/foo.module';
import { DashboardComponent } from './dashboard.component';

const routes = [
    {path: 'dashboard', component: DashboardComponent}
]

@NgModule({
  declarations: [
    DashboardComponent    
  ],
  imports: [
      FooModule,
      RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
