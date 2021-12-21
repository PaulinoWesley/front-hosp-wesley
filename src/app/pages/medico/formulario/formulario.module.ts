import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormularioComponent } from './formulario.component';
import { FormularioRoutingModule } from './formulario-routing.module';

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
