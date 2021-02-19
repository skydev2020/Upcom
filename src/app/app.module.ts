import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FooModule } from './foo/foo.module';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { BioComponent } from './bio/bio.component';
import {FooConfig} from './foo/foo.config';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { UsersComponent } from './users/users.component';
// import { FooComponent } from './foo/foo.component';

const routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BioComponent,
    UsersComponent,
    // DashboardComponent,
    // FooComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FooModule,
    RouterModule.forRoot(routes),
    DashboardModule    
  ],
  providers: [{
    provide: FooConfig, useValue: {
      prefix: 'Custom Prefix'
    }
  }],  
  bootstrap: [AppComponent]
})
export class AppModule { }
