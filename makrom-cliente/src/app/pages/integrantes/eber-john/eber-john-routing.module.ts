import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EberJohnPage } from './eber-john.page';

const routes: Routes = [
  {
    path: '',
    component: EberJohnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EberJohnPageRoutingModule {}
