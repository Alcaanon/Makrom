import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CidineiaRochaPage } from './cidineia-rocha.page';

const routes: Routes = [
  {
    path: '',
    component: CidineiaRochaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CidineiaRochaPageRoutingModule {}
