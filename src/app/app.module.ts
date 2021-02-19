import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { BioComponent } from './bio/bio.component';
import { TabComponent } from './tab/tab.component';
import { TabListComponent } from './tab-list/tab-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BioComponent,
    TabComponent,
    TabListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
