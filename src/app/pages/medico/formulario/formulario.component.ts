import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Medico } from '@entities';
import { FormularioService } from './formulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  public formulario: FormGroup = new FormGroup({});
  public medico?: Medico[];

  constructor(
    private formBuilder: FormBuilder,
    private service: FormularioService
    ) { }

  ngOnInit(): void {
    this.criarFormulario();
  }

  private criarFormulario(): void {
    this.formulario = this.formBuilder.group({
      nome: null,
      crm: null
    })
  }

  public enviar(): void {
    const medico = new Medico(this.formulario.value);

    this.service.salvar(medico).subscribe((medicoSalvo: Medico) => {
      alert(`O médico: ${medicoSalvo.primeiroNome} com número CRM: ${medicoSalvo.crm} foi salvo com sucesso`);
    })
  }
}
