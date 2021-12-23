import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paciente } from '@entities';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private baseUrl = 'http://localhost:8080/pacientes'
  
  constructor(
    private httpClient: HttpClient
  ) 
  { }

  public criar(paciente: Paciente): Observable<Paciente> {
    return this.httpClient
              .post<Paciente>(this.baseUrl, paciente)
              .pipe(map((p: Paciente) => new Paciente(p)));
  }

  public atualizar(paciente: Paciente): Observable<Paciente> {
    return this.httpClient
              .put<Paciente>(this.baseUrl, paciente)
              .pipe(map((p: Paciente) => new Paciente(p)));;
  }

  public buscarPorCpf(cpf: string): Observable<Paciente> {
    return this.httpClient
      .get<Paciente>(`${this.baseUrl}/${cpf}`)
      .pipe(map((p: Paciente) => new Paciente(p)));
  }

  public buscar(paciente: Paciente): Observable<Paciente[]> {
    let httpParams: HttpParams = new HttpParams();
    if (paciente.cpf)
      httpParams = httpParams.append('cpf', paciente.cpf);
    if (paciente.dataNascimento)
      httpParams = httpParams.append('dataNascimento', paciente.dataNascimentoJson);
    if (paciente.nome)
      httpParams = httpParams.append('nome', paciente.nome);
    
    return this.httpClient
      .get<Paciente[]>(`${this.baseUrl}`, {params: httpParams})
      .pipe(map((pacientes: Paciente[]) => pacientes.map((p: Paciente) => new Paciente(p))));
  }

  public deletar(cpf: string): Observable<Paciente> {
    return this.httpClient
      .delete<Paciente>(`${this.baseUrl}/${cpf}`)
      .pipe(map((paciente: Paciente) => paciente));
  }
}
