import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Medico } from '@entities';
import { Observable } from 'rxjs';
import { ListagemService } from './listagem.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({});
  public medicos: Medico[] = new Array<Medico>();

  constructor(
    private formBuilder: FormBuilder,
    private service: ListagemService
  ) { }

  ngOnInit(): void {
    this.criarFormulario();
  }

  private criarFormulario(): void {
    this.formulario = this.formBuilder.group({
      crm: null,
      nome: null
    });
  };

  public get ehListagemVisivel(): boolean {
    return !!this.medicos && this.medicos.length != 0;
  }

  public pesquisar(): void {
    const medico = new Medico(this.formulario.value);
    this.service
      .listar(medico)
      .subscribe((medicos: Medico[]) => {
        this.medicos = medicos;
      });
  }

  public editar(medico: Medico) {
    console.log(medico)
    this.service.editar(medico);
  }

  public limpar(): void {
    this.formulario.reset();
    this.medicos = new Array<Medico>();
  }

  public deletar(medico: Medico): void {
    this.service.deletar(medico)
      .subscribe((medicoDeletado: Medico)=> {
        alert('Medico deletado com sucesso!');
        this.pesquisar();
      })
  }
}
