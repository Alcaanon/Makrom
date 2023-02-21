import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JoaoPauloCunhaPage } from './joao-paulo-cunha.page';

const routes: Routes = [
  {
    path: '',
    component: JoaoPauloCunhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JoaoPauloCunhaPageRoutingModule {}
