import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FormularioRoutingModule } from './formulario-routing.module';
import { FormularioComponent } from './formulario.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormularioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,

    FormularioRoutingModule
  ]
})
export class FormularioModule { }
