import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FooModule } from './foo/foo.module';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { BioComponent } from './bio/bio.component';
import { FooComponent } from './foo/foo.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BioComponent,
    FooComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FooModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
