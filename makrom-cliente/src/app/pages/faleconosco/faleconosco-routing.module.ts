import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaleconoscoPage } from './faleconosco.page';

const routes: Routes = [
  {
    path: '',
    component: FaleconoscoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaleconoscoPageRoutingModule {}
