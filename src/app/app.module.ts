import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsertableComponent } from './usertable/api.component';
import { AdduserComponent } from './adduser/adduser.component';

import { ApiService }  from './services/api.service';


@NgModule({
  declarations: [
    AppComponent,
    UsertableComponent,
    AdduserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
