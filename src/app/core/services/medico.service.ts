import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medico } from '@entities';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  private baseUrl = `${environment.baseUrl}/medicos`
  
  constructor(
    private httpClient: HttpClient
  ) 
  { }

  public criar(medico: Medico): Observable<Medico> {
    return this.httpClient
              .post<Medico>(this.baseUrl, medico)
              .pipe(map((m: Medico) => new Medico(m)));
  }

  public atualizar(medico: Medico): Observable<Medico> {
    return this.httpClient
              .put<Medico>(this.baseUrl, medico)
              .pipe(map((m: Medico) => new Medico(m)));
  }

  public buscarPorCrm(crm: string): Observable<Medico> {
    return this.httpClient
      .get<Medico>(`${this.baseUrl}/${crm}`)
      .pipe(map((m: Medico) => new Medico(m)));
  }

  public buscar(medico: Medico): Observable<Medico[]> {
    let httpParams: HttpParams = new HttpParams();
    if (medico.crm)
      httpParams = httpParams.append('crm', medico.crm);
    if (medico.nome)
      httpParams = httpParams.append('nome', medico.nome);
        
    return this.httpClient
      .get<Medico[]>(`${this.baseUrl}`, {params: httpParams})
      .pipe(map((medicos: Medico[]) => medicos.map((m: Medico) => new Medico(m))));
  }

  public deletar(crm: String): Observable<Medico> {
    return this.httpClient
      .delete<Medico>(`${this.baseUrl}/${crm}`)
      .pipe(map((medico: Medico) => medico));
  }
}
