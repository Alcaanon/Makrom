import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuemsomosPageRoutingModule } from './quemsomos-routing.module';

import { QuemsomosPage } from './quemsomos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuemsomosPageRoutingModule
  ],
  declarations: [QuemsomosPage]
})
export class QuemsomosPageModule {}
