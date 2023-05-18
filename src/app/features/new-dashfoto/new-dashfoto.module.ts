import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewDashfotoPageComponent } from './pages/new-dashfoto-page/new-dashfoto-page.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [NewDashfotoPageComponent],
  imports: [CommonModule, SharedModule],
})
export class NewDashfotoModule {}
