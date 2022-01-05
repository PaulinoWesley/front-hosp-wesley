import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Consulta, Medico, Paciente } from '@entities';
import { ConsultaService } from '@services';
import { Observable } from 'rxjs';
import { ConsultaFilterDto } from 'src/app/core/dtos';

@Injectable({
  providedIn: 'root'
})
export class ListagemService {

  constructor(
    private consultaService: ConsultaService,
    private router: Router
  ) { }

  public pesquisar(filtro: ConsultaFilterDto): Observable<Consulta[]> {
    return this.consultaService.buscarPorFiltro(filtro);
  }

  public editar(consulta: Consulta) {
    this.router.navigate(['/consulta/formulario', consulta.id]);
  }

  public deletar(consulta: Consulta): Observable<Consulta> {
    return this.consultaService.deletar(consulta.id);
  }
}
