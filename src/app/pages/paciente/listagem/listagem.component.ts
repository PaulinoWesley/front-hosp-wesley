import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
    private service: ListagemService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.criarFormulario();
    this.carregarDadosDoStorage();
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

  public editar(paciente: Paciente): void {
    this.guardarDadosNoStorage();
    this.service.editar(paciente);
  }

  public limpar(): void {
    this.formulario.reset();
    this.pacientes = new Array<Paciente>();
  }

  public deletar(paciente: Paciente): void {
    this.service.deletar(paciente)
      .subscribe((pacienteDeletado: Paciente) => {
        this.pesquisar();
        alert('Paciente deletado com sucesso');
      });
  }

  public moverParaCadastro(): void {
    this.guardarDadosNoStorage();
    this.router.navigate(['/paciente/formulario']);
  }

  private guardarDadosNoStorage(): void {
    this.saveValueToLocalStorage('nome');
    this.saveValueToLocalStorage('cpf');
    this.saveValueToLocalStorage('dataNascimento');
  }

  private saveValueToLocalStorage(formControlName: string): void {
    if (this.formulario.get(formControlName)?.value) {
      localStorage.setItem(`${formControlName}PacienteList`, this.formulario.get(formControlName)?.value);
    }
  }

  private carregarDadosDoStorage(): void {
    this.getValueFromLocalStorage('nome');
    this.getValueFromLocalStorage('cpf');
    this.getValueFromLocalStorage('dataNascimento');

    this.pesquisar();
  }

  private getValueFromLocalStorage(formControlName: string): void {
    const key = `${formControlName}PacienteList`;
    const value = localStorage.getItem(key)
    if (value) {
      this.formulario.get(formControlName)?.setValue(value)
    }
    localStorage.removeItem(key);
  }
}
