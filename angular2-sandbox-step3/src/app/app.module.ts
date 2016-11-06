import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AppFirstComponent } from './firstcomponent/app.firstcomponent';
import { FirstcomponentwithcliComponent } from './firstcomponentwithcli/firstcomponentwithcli.component';

@NgModule({
  declarations: [
    AppComponent,
    AppFirstComponent,
    FirstcomponentwithcliComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent, AppFirstComponent]
})
export class AppModule { }
