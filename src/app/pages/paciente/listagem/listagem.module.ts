import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListagemRoutingModule } from './listagem-routing.module';
import { ListagemComponent } from './listagem.component';


@NgModule({
  declarations: [
    ListagemComponent
  ],
  imports: [
    CommonModule,
    ListagemRoutingModule
  ]
})
export class ListagemModule { }
