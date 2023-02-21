import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicacoesPageRoutingModule } from './publicacoes-routing.module';

import { PublicacoesPage } from './publicacoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicacoesPageRoutingModule
  ],
  declarations: [PublicacoesPage]
})
export class PublicacoesPageModule {}
