import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    private service: ListagemService
  ) { }

  ngOnInit(): void {
    this.criarFormulario();
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
}
