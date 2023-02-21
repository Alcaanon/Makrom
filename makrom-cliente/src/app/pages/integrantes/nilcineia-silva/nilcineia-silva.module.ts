import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NilcineiaSilvaPageRoutingModule } from './nilcineia-silva-routing.module';

import { NilcineiaSilvaPage } from './nilcineia-silva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NilcineiaSilvaPageRoutingModule
  ],
  declarations: [NilcineiaSilvaPage]
})
export class NilcineiaSilvaPageModule {}
