import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditDashfotoPageComponent } from './pages/edit-dashfoto-page/edit-dashfoto-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditDashfotoPageComponent],
  imports: [CommonModule, SharedModule, RouterModule, ReactiveFormsModule],
})
export class EditDashfotoModule {}
