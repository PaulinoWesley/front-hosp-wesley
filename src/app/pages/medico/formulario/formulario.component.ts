import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Medico } from '@entities';
import { FormularioService } from './formulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  public formulario: FormGroup = new FormGroup({});
  public medico = new Medico();

  constructor(
    private formBuilder: FormBuilder,
    private service: FormularioService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.criarFormulario();
    this.carregarMedicoSelecionado();
  }

  private criarFormulario(): void {
    this.formulario = this.formBuilder.group({
      nome: null,
      crm: null
    })
  }

  public get ehEdicao(): boolean {
    return !!(this.medico && this.medico.crm && this.medico.crm.length);
  }

  public enviar(): void {
    const medico = new Medico(this.formulario.value);

    this.service.salvar(medico, this.ehEdicao).subscribe((medicoSalvo: Medico) => {
      alert(`O médico: ${medicoSalvo.primeiroNome} com número CRM: ${medicoSalvo.crm} foi salvo com sucesso`);
      this.router.navigate(['/medico']);
    })
  }

  public carregarMedicoSelecionado(): void {
    const medicoSelecionado = this.route.snapshot.data['medico'];

    if (medicoSelecionado && medicoSelecionado.crm) {
      this.medico = medicoSelecionado;
      this.patchMedicoToFormulario();
    }
  }

  private patchMedicoToFormulario() {
    this.formulario.patchValue(this.medico);
  }
}
