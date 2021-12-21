import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from '@entities';
import { PacienteService } from '@services';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListagemService {
  
  constructor(
    private pacienteService: PacienteService,
    private router: Router
    ) { }
    
    public listar(paciente: Paciente): Observable<Paciente[]> {
      return this.pacienteService.buscar(paciente);
    }

    public editar(paciente: Paciente): void {
      this.router.navigate(['/paciente/formulario', paciente.cpf]);
    }
}
