import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JovanaPatriciaPageRoutingModule } from './jovana-patricia-routing.module';

import { JovanaPatriciaPage } from './jovana-patricia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JovanaPatriciaPageRoutingModule
  ],
  declarations: [JovanaPatriciaPage]
})
export class JovanaPatriciaPageModule {}
