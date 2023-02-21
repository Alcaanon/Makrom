import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FelipeGodoyPageRoutingModule } from './felipe-godoy-routing.module';

import { FelipeGodoyPage } from './felipe-godoy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FelipeGodoyPageRoutingModule
  ],
  declarations: [FelipeGodoyPage]
})
export class FelipeGodoyPageModule {}
