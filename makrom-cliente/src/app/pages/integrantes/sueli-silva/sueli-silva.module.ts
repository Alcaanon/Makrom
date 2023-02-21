import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SueliSilvaPageRoutingModule } from './sueli-silva-routing.module';

import { SueliSilvaPage } from './sueli-silva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SueliSilvaPageRoutingModule
  ],
  declarations: [SueliSilvaPage]
})
export class SueliSilvaPageModule {}
