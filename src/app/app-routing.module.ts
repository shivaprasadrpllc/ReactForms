import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'comapny', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) },
  { path: 'forms', loadChildren: () => import('./cfrom/cfrom.module').then(m => m.CfromModule) },
  { path: '', redirectTo: 'forms', pathMatch: 'full' },
  { path: '**', redirectTo: 'forms', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
