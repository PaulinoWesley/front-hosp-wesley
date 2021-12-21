import { Injectable } from '@angular/core';
import { Paciente } from '@entities';
import { PacienteService } from '@services';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor(
    private pacienteService: PacienteService
  ) { }

  public salvar(paciente: Paciente, ehEdicao = false): Observable<Paciente>{ 
    if (ehEdicao)
      return this.atualizar(paciente);
    return this.criar(paciente);
  }

  private criar(paciente: Paciente): Observable<Paciente> {
    return this.pacienteService.criar(paciente);
  }

  private atualizar(paciente: Paciente): Observable<Paciente> {
    return this.pacienteService.atualizar(paciente);
  }
}
