import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Consulta } from '@entities';
import { ConsultaService } from '@services';
import { ConsultaFilterDto } from 'src/app/core/dtos';
import { ListagemService } from './listagem.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {
  public formulario: FormGroup = new FormGroup({});
  public consultas: Consulta[] = new Array<Consulta>();

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
      cpfPaciente: null,
      crmMedico: null
    });
  };

  public pesquisar(): void {
    const filtro = new ConsultaFilterDto(this.formulario.value);
    this.service.pesquisar(filtro).subscribe((consultas: Consulta[]) => {
      this.consultas = consultas;
    });
  }

  public editar(consulta: Consulta): void {
    this.guardarDadosNoStorage();
    this.service.editar(consulta);
  }

  public limpar():void {
    this.formulario.reset();
  }

  public deletar(consulta: Consulta): void {
    this.service.deletar(consulta).subscribe((consultaDeletada: Consulta) => {
      alert('A Consulta foi desmarcada');
      this.pesquisar();
    });
  }

  public get ehListagemVisivel(): boolean {
    return !!this.consultas && this.consultas.length != 0;
  }

  public moverParaTelaDeCadastro(): void {
    this.guardarDadosNoStorage();
    this.router.navigate(['/consulta/formulario']);
  }

  private saveValueToLocalStorage(formControlName: string): void {
    if (this.formulario.get(formControlName)?.value) {
      localStorage.setItem(`${formControlName}ConsultaList`, this.formulario.get(formControlName)?.value);
    }
  }

  private guardarDadosNoStorage(): void {
    this.saveValueToLocalStorage('cpfPaciente');
    this.saveValueToLocalStorage('crmMedico');
  }

  private getValueFromLocalStorage(formControlName: string): void {
    const key = `${formControlName}ConsultaList`;
    const value = localStorage.getItem(key);

    if (value) {
      this.formulario.get(formControlName)?.setValue(value);
    }
    localStorage.removeItem(key);
  }

  private carregarDadosDoStorage(): void {
    this.getValueFromLocalStorage('cpfPaciente');
    this.getValueFromLocalStorage('crmMedico');

    this.pesquisar();
  }
}
