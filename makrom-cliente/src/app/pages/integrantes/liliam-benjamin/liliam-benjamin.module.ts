import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiliamBenjaminPageRoutingModule } from './liliam-benjamin-routing.module';

import { LiliamBenjaminPage } from './liliam-benjamin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiliamBenjaminPageRoutingModule
  ],
  declarations: [LiliamBenjaminPage]
})
export class LiliamBenjaminPageModule {}
