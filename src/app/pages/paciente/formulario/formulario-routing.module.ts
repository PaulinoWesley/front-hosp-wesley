import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteResolver } from 'src/app/core/resolvers';
import { FormularioComponent } from './formulario.component';

const routes: Routes = [{ 
  path: '', component: FormularioComponent,
  resolve: {
    paciente: PacienteResolver
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormularioRoutingModule { }
