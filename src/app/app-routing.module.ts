import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'paciente',
    loadChildren: () => import('./pages/paciente/listagem/listagem.module').then(m => m.ListagemModule)
  },
  {
    path: 'paciente/formulario',
    loadChildren: () => import('./pages/paciente/formulario/formulario.module').then(m => m.FormularioModule)
  },
  {
    path: 'medico',
    loadChildren: () => import('./pages/medico/listagem/listagem.module').then(m => m.ListagemModule)
  },
  {
    path: 'medico/formulario',
    loadChildren: () => import('./pages/medico/formulario/formulario.module').then(m => m.FormularioModule)
  },
  {
    path: 'consulta',
    loadChildren: () => import('./pages/consulta/listagem/listagem.module').then(m => m.ListagemModule)
  },
  {
    path: 'consulta/formulario',
    loadChildren: () => import('./pages/consulta/formulario/formulario.module').then(m => m.FormularioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
