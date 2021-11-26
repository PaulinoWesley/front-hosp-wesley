import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Paciente } from '@entities';
import { FormularioService } from './formulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  public formulario: FormGroup = new FormGroup({});
  public paciente?: Paciente[];
  constructor(
    private service: FormularioService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.criarFormulario();
  }

  private criarFormulario(): void {
    this.formulario = this.formBuilder.group({
      nome: null,
      cpf: null,
      dataNascimento: null,
    });
  };

  public enviar(): void {
    const paciente =  new Paciente(this.formulario.value);

    this.service.salvar(paciente).subscribe((pacienteSalvo: Paciente) => {
      alert(`Paciente salvo com sucesso!! nome = ${pacienteSalvo.primeiroNome} cpf = ${pacienteSalvo.cpf}`); 
    });
  }

}
