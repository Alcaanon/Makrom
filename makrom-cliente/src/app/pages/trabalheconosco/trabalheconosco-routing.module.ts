import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrabalheconoscoPage } from './trabalheconosco.page';

const routes: Routes = [
  {
    path: '',
    component: TrabalheconoscoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrabalheconoscoPageRoutingModule {}
