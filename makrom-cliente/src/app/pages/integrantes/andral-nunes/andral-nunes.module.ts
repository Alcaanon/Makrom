import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AndralNunesPageRoutingModule } from './andral-nunes-routing.module';

import { AndralNunesPage } from './andral-nunes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AndralNunesPageRoutingModule
  ],
  declarations: [AndralNunesPage]
})
export class AndralNunesPageModule {}
