import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './features/home/pages/home-page/home-page.component';
import { NewDashfotoPageComponent } from './features/new-dashfoto/pages/new-dashfoto-page/new-dashfoto-page.component';
import { DashfotoPageComponent } from './features/dashfoto/pages/dashfoto-page/dashfoto-page.component';
import { EditDashfotoPageComponent } from './features/edit-dashfoto/pages/edit-dashfoto-page/edit-dashfoto-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'dashfotos/new', component: NewDashfotoPageComponent},
  {path: 'dashfotos/edit/:id', component: EditDashfotoPageComponent},
  {path: 'dashfotos/:id', component: DashfotoPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
