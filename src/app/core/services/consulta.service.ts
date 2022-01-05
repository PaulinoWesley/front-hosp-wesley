import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Consulta } from '@entities';
import { environment } from 'src/environments/environment';
import { ConsultaFilterDto } from '../dtos';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  private baseUrl = `${environment.baseUrl}/consultas`
  
  constructor(
    private httpClient: HttpClient
  ) 
  { }

  public criar(consulta: Consulta): Observable<Consulta> {
    return this.httpClient
              .post<Consulta>(this.baseUrl, consulta)
              .pipe(map((c: Consulta) => new Consulta(c)));
  }

  public atualizar(consulta: Consulta): Observable<Consulta> {
    return this.httpClient
              .put<Consulta>(this.baseUrl, consulta)
              .pipe(map((c: Consulta) => new Consulta(c)));
  }

  public getById(id: number): Observable<Consulta> {
    return this.httpClient
      .get<Consulta>(`${this.baseUrl}/${id}`)
      .pipe(map((c: Consulta) => new Consulta(c)));
  }

  public buscar(consulta: Consulta): Observable<Consulta[]> {
    // TODO: avaliar a necessidade da existencia desse método 
    let httpParams: HttpParams = new HttpParams();
    if (consulta.medico.crm)
      httpParams = httpParams.append('crm', consulta.medico.crm);
    if (consulta.paciente.cpf)
      httpParams = httpParams.append('cpf', consulta.paciente.cpf);
    if (consulta.horarioConsultaFormatado)
      httpParams = httpParams.append('horarioConsulta', consulta.horarioConsultaFormatado)
        
    return this.httpClient
      .get<Consulta[]>(`${this.baseUrl}`, {params: httpParams})
      .pipe(map((consultas: Consulta[]) => consultas.map((c: Consulta) => new Consulta(c))));
  }

  public buscarPorFiltro(filtro: ConsultaFilterDto): Observable<Consulta[]> {
    let httpParams: HttpParams = new HttpParams();
    if (filtro.cpfPaciente)
      httpParams = httpParams.append('paciente', filtro.cpfPaciente);
    if (filtro.crmMedico)
      httpParams = httpParams.append('medico', filtro.crmMedico);
        
    return this.httpClient
      .get<Consulta[]>(`${this.baseUrl}`, {params: httpParams})
      .pipe(map((consultas: Consulta[]) => consultas.map((c: Consulta) => new Consulta(c))));
  }  

  public deletar(id: number): Observable<Consulta> {
    return this.httpClient
      .delete<Consulta>(`${this.baseUrl}/${id}`)
      .pipe(map((consulta: Consulta) => consulta));
  }
}
