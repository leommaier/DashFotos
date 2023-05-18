import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashfotoPageComponent } from './pages/dashfoto-page/dashfoto-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashfotoPageComponent],
  imports: [CommonModule, SharedModule, RouterModule, ReactiveFormsModule],
})
export class DashfotoModule {}
