import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Paciente } from '@entities';
import { ListagemService } from './listagem.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({});
  public pacientes?: Paciente[] = new Array<Paciente>();

  constructor(
    private formBuilder: FormBuilder,
    private service: ListagemService
    ) { }

  ngOnInit(): void {
    this.criarFormulario();
  }

  public criarFormulario(): void {
    this.formulario = this.formBuilder.group({
      nome: null,
      cpf: null,
      dataNascimento: null,
    });
  };

  public pesquisar(): void {
    const paciente = new Paciente(this.formulario.value);
    this.service
      .listar(paciente)
      .subscribe((pacientes: Paciente[]) => { this.pacientes = pacientes });
  }

  public get ehListagemVisivel(): boolean {
    return !!this.pacientes && this.pacientes.length != 0;
  }

  public editar(paciente: Paciente):void {
    this.service.editar(paciente);
  }

  public limpar(): void {
    this.formulario.reset();
    this.pacientes = new Array<Paciente>();
  }

}
