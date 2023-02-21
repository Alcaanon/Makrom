import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AunerPereiraCarneiroPage } from './auner-pereira-carneiro.page';

const routes: Routes = [
  {
    path: '',
    component: AunerPereiraCarneiroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AunerPereiraCarneiroPageRoutingModule {}
