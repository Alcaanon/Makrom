import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NilcineiaSilvaPage } from './nilcineia-silva.page';

const routes: Routes = [
  {
    path: '',
    component: NilcineiaSilvaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NilcineiaSilvaPageRoutingModule {}
