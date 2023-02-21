import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RobertoSilvaPageRoutingModule } from './roberto-silva-routing.module';

import { RobertoSilvaPage } from './roberto-silva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RobertoSilvaPageRoutingModule
  ],
  declarations: [RobertoSilvaPage]
})
export class RobertoSilvaPageModule {}
