import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashfotoFormComponent } from './components/dashfoto-form/dashfoto-form.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagesComponent } from './components/messages/messages.component';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DashfotoFormComponent,
    MessagesComponent    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    DashfotoFormComponent
  ]
})
export class SharedModule { }
