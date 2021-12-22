import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Medico } from '@entities';
import { MedicoService } from '@services';

@Injectable({
  providedIn: 'root'
})
export class ListagemService {

  constructor(
    private medicoService: MedicoService,
    private router: Router
  ) { }

  public listar(medico: Medico) {
    return this.medicoService.buscar(medico);
  }

  public editar(medico: Medico) {
    this.router.navigate(['/medico/formulario', medico.crm]);
  }
}
