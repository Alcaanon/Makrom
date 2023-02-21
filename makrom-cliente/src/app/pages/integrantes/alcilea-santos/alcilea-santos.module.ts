import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlcileaSantosPageRoutingModule } from './alcilea-santos-routing.module';

import { AlcileaSantosPage } from './alcilea-santos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlcileaSantosPageRoutingModule
  ],
  declarations: [AlcileaSantosPage]
})
export class AlcileaSantosPageModule {}
