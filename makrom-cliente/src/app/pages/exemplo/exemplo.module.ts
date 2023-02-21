import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExemploPageRoutingModule } from './exemplo-routing.module';

import { ExemploPage } from './exemplo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExemploPageRoutingModule
  ],
  declarations: [ExemploPage]
})
export class ExemploPageModule {}
