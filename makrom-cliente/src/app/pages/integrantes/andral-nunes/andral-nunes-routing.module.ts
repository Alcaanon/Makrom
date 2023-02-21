import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AndralNunesPage } from './andral-nunes.page';

const routes: Routes = [
  {
    path: '',
    component: AndralNunesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AndralNunesPageRoutingModule {}
