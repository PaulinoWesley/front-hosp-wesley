import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Medico } from '@entities';
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
    private service: ListagemService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.criarFormulario();
    this.carregarDadosDoStorage();
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
    this.guardarDadosNoStorage();
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

  public moverParaTelaDeCadastro(): void {
    this.guardarDadosNoStorage();
    this.router.navigate(['/medico/formulario'])
  }

  private saveValueInLocalStorage(formControlName: string): void {
    if (this.formulario.get(formControlName)?.value) {
      localStorage.setItem(`${formControlName}MedicoList`, this.formulario.get(formControlName)?.value);
    }
  }

  private guardarDadosNoStorage(): void  {
    this.saveValueInLocalStorage('crm');
    this.saveValueInLocalStorage('nome');
  }

  private getValueFromLocalStorage(formControlName: string) : void {
    const key = `${formControlName}MedicoList`;
    const value = localStorage.getItem(key);

    if (value) {
      this.formulario.get(formControlName)?.setValue(value);
    }
    localStorage.removeItem(key);
  }

  private carregarDadosDoStorage(): void {
    this.getValueFromLocalStorage('crm');
    this.getValueFromLocalStorage('nome');

    this.pesquisar();
  }
}
