import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlterarsenhaPageRoutingModule } from './alterarsenha-routing.module';

import { AlterarsenhaPage } from './alterarsenha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlterarsenhaPageRoutingModule
  ],
  declarations: [AlterarsenhaPage]
})
export class AlterarsenhaPageModule {}
