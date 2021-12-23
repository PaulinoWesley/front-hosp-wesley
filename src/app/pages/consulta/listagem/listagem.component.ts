import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Consulta } from '@entities';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {
  public formulario: FormGroup = new FormGroup({});
  public consultas: Consulta[] = new Array<Consulta>();

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.criarFormulario();
  }
  
  private criarFormulario(): void {
    this.formulario = this.formBuilder.group({
      nomePaciente: null,
      nomeMedico: null
    });
  };

  public pesquisar(): void {}

  public editar(consulta: Consulta): void {}

  public limpar():void {}

  public deletar(consulta: Consulta): void {}

  public get ehListagemVisivel(): boolean {
    return !!this.consultas && this.consultas.length != 0;
  }
}
