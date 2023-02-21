import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EricaGomessPage } from './erica-gomess.page';

const routes: Routes = [
  {
    path: '',
    component: EricaGomessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EricaGomessPageRoutingModule {}
