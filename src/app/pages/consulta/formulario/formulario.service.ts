import { Injectable } from '@angular/core';
import { Consulta } from '@entities';
import { ConsultaService } from '@services';
import { Observable } from 'rxjs';
import { ConsultaSalvarDto } from '@dtos';


@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor(
    private consultaService: ConsultaService
  ) { }

  public salvar(dto: ConsultaSalvarDto, ehEdicao = false): Observable<Consulta> {
    const consulta: Consulta = dto.toConsulta();
    if (ehEdicao)
      return this.consultaService.atualizar(consulta);
    return this.consultaService.criar(consulta);
  }
}
