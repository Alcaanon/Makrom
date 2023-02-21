import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CidineiaRochaPageRoutingModule } from './cidineia-rocha-routing.module';

import { CidineiaRochaPage } from './cidineia-rocha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CidineiaRochaPageRoutingModule
  ],
  declarations: [CidineiaRochaPage]
})
export class CidineiaRochaPageModule {}
