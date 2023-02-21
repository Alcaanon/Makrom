import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IlidiaCamposPageRoutingModule } from './ilidia-campos-routing.module';

import { IlidiaCamposPage } from './ilidia-campos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IlidiaCamposPageRoutingModule
  ],
  declarations: [IlidiaCamposPage]
})
export class IlidiaCamposPageModule {}
