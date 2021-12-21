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

  public salvar(medico: Medico): Observable<Medico> {
    return this.medicoService.criar(medico);
  }
}
