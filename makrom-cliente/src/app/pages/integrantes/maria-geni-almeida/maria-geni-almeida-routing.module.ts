import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MariaGeniAlmeidaPage } from './maria-geni-almeida.page';

const routes: Routes = [
  {
    path: '',
    component: MariaGeniAlmeidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MariaGeniAlmeidaPageRoutingModule {}
