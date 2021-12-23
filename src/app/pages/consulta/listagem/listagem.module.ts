import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListagemRoutingModule } from './listagem-routing.module';
import { ListagemComponent } from './listagem.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListagemComponent
  ],
  imports: [
    CommonModule,
    ListagemRoutingModule,
    ReactiveFormsModule
  ]
})
export class ListagemModule { }
