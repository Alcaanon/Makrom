import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IlidiaCamposPage } from './ilidia-campos.page';

const routes: Routes = [
  {
    path: '',
    component: IlidiaCamposPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IlidiaCamposPageRoutingModule {}
