import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EricaGomesPage } from './erica-gomes.page';

const routes: Routes = [
  {
    path: '',
    component: EricaGomesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EricaGomesPageRoutingModule {}
