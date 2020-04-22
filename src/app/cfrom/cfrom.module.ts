import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FromContolsComponent } from './from-contols/from-contols.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: FromContolsComponent }
];


@NgModule({
  declarations: [FromContolsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class CfromModule { }
