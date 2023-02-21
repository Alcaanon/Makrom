import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EltonVieiraPageRoutingModule } from './elton-vieira-routing.module';

import { EltonVieiraPage } from './elton-vieira.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EltonVieiraPageRoutingModule
  ],
  declarations: [EltonVieiraPage]
})
export class EltonVieiraPageModule {}
