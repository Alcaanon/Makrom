import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JoaoPauloCunhaPageRoutingModule } from './joao-paulo-cunha-routing.module';

import { JoaoPauloCunhaPage } from './joao-paulo-cunha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JoaoPauloCunhaPageRoutingModule
  ],
  declarations: [JoaoPauloCunhaPage]
})
export class JoaoPauloCunhaPageModule {}
