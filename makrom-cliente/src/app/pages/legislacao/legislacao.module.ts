import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LegislacaoPageRoutingModule } from './legislacao-routing.module';

import { LegislacaoPage } from './legislacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LegislacaoPageRoutingModule
  ],
  declarations: [LegislacaoPage]
})
export class LegislacaoPageModule {}
