import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes = [
    {path: 'dashboard', component: DashboardComponent}
]

@NgModule({
  declarations: [
    DashboardComponent    
  ],
  imports: [
      RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
