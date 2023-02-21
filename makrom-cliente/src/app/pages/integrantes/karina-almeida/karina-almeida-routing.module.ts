import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KarinaAlmeidaPage } from './karina-almeida.page';

const routes: Routes = [
  {
    path: '',
    component: KarinaAlmeidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KarinaAlmeidaPageRoutingModule {}
