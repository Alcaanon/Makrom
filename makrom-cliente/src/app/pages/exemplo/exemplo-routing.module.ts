import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExemploPage } from './exemplo.page';

const routes: Routes = [
  {
    path: '',
    component: ExemploPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExemploPageRoutingModule {}
