import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamilAlbertoPageRoutingModule } from './samil-alberto-routing.module';

import { SamilAlbertoPage } from './samil-alberto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamilAlbertoPageRoutingModule
  ],
  declarations: [SamilAlbertoPage]
})
export class SamilAlbertoPageModule {}
