import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicoResolver } from 'src/app/core/resolvers';
import { FormularioComponent } from './formulario.component';

const routes: Routes = [{
  path: '', component: FormularioComponent,
  resolve: { medico : MedicoResolver }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormularioRoutingModule { }
