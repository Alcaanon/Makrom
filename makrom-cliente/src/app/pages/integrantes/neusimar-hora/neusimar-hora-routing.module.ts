import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NeusimarHoraPage } from './neusimar-hora.page';

const routes: Routes = [
  {
    path: '',
    component: NeusimarHoraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NeusimarHoraPageRoutingModule {}
