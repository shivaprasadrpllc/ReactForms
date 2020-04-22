import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'maintenance', component: MaintenanceComponent },
  { path: '', redirectTo: 'maintenance', pathMatch: 'full' },
  { path: '**', redirectTo: 'maintenance', pathMatch: 'full' }
];

@NgModule({
  declarations: [MaintenanceComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class CompanyModule { }
