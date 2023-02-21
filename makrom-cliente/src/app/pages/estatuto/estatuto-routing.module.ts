import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstatutoPage } from './estatuto.page';

const routes: Routes = [
  {
    path: '',
    component: EstatutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstatutoPageRoutingModule {}
