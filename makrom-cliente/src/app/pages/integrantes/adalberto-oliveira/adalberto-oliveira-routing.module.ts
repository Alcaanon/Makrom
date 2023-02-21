import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdalbertoOliveiraPage } from './adalberto-oliveira.page';

const routes: Routes = [
  {
    path: '',
    component: AdalbertoOliveiraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdalbertoOliveiraPageRoutingModule {}
