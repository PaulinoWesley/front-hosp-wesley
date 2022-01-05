import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaResolver } from 'src/app/core/resolvers/consulta.resolver';
import { FormularioComponent } from './formulario.component';

const routes: Routes = [
  {
    path: ':id', component: FormularioComponent,
    resolve: { consulta: ConsultaResolver }
  },
  {
    path: '', component: FormularioComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormularioRoutingModule { }
