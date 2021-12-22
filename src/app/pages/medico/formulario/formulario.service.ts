import { Injectable } from '@angular/core';
import { Medico } from '@entities';
import { MedicoService } from '@services';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor(
    private medicoService: MedicoService
  ) { }

  public salvar(medico: Medico, ehEdicao = false): Observable<Medico> {
    if (ehEdicao)
      return this.atualizar(medico);
    return this.criar(medico);
  }

  private criar(medico: Medico): Observable<Medico> {
    return this.medicoService.criar(medico);
  }

  private atualizar(medico: Medico): Observable<Medico> {
    return this.medicoService.atualizar(medico);
  }
}
