import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdalbertoOliveiraPageRoutingModule } from './adalberto-oliveira-routing.module';

import { AdalbertoOliveiraPage } from './adalberto-oliveira.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdalbertoOliveiraPageRoutingModule
  ],
  declarations: [AdalbertoOliveiraPage]
})
export class AdalbertoOliveiraPageModule {}
