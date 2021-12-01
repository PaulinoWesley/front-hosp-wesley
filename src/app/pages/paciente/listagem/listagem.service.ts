import { Injectable } from '@angular/core';
import { Paciente } from '@entities';
import { PacienteService } from '@services';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListagemService {

  constructor(
    private pacienteService: PacienteService
  ) { }

  public buscar(paciente: Paciente): Observable<Paciente[]> {
    return this.pacienteService.buscar(paciente);
  }
}
