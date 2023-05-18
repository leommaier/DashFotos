import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { HomeModule } from './features/home/home.module';
import { NewDashfotoModule } from './features/new-dashfoto/new-dashfoto.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditDashfotoModule } from './features/edit-dashfoto/edit-dashfoto.module';
import { DashfotoModule } from './features/dashfoto/dashfoto.module';






@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    NewDashfotoModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    EditDashfotoModule,
    DashfotoModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
