import { Injectable } from '@angular/core';
import { Consulta } from '@entities';
import { ConsultaService } from '@services';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor(
    private consultaService: ConsultaService
  ) { }

  public salvar(consulta: Consulta, ehEdicao = false): Observable<Consulta> {
    if (ehEdicao)
      return this.consultaService.atualizar(consulta);
    return this.consultaService.criar(consulta);
  }
}
