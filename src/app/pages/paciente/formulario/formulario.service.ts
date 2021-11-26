import { Injectable } from '@angular/core';
import { Paciente } from '@entities';
import { PacienteService } from '@services';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  private url = 'localhost:8080/paciente'

  constructor(
    private pacienteService: PacienteService
  ) { }

  public salvar(paciente: Paciente): Observable<Paciente> {
    return this.pacienteService.criar(paciente);
  }
}
