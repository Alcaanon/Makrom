import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarcoAntonioAndradePage } from './marco-antonio-andrade.page';

const routes: Routes = [
  {
    path: '',
    component: MarcoAntonioAndradePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarcoAntonioAndradePageRoutingModule {}
