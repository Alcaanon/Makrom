import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VantagensPageRoutingModule } from './vantagens-routing.module';

import { VantagensPage } from './vantagens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VantagensPageRoutingModule
  ],
  declarations: [VantagensPage]
})
export class VantagensPageModule {}
