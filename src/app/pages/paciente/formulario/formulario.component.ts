import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from '@entities';
import { FormularioService } from './formulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  public formulario: FormGroup = new FormGroup({});
  public paciente = new Paciente();
  constructor(
    private service: FormularioService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.criarFormulario();
    this.carregarPacienteSelecionado();
  }

  private criarFormulario(): void {
    this.formulario = this.formBuilder.group({
      nome: null,
      cpf: null,
      dataNascimento: null,
    });
  };

  private carregarPacienteSelecionado(): void {
    const pacienteSelecionado: Paciente = this.route.snapshot.data['paciente'];

    if (pacienteSelecionado && pacienteSelecionado.cpf) {
      this.paciente = pacienteSelecionado;
      this.patchPacienteToFormulario();
    }
  }

  private patchPacienteToFormulario() {
    this.formulario.patchValue(this.paciente);
    this.formulario.get('dataNascimento')?.setValue(this.paciente.dataNascimentoJson);
  }

  public limpar(): void { 
    console.error('Implementar limpar');
  }

  public get ehEdicao(): boolean {
    return !!(this.paciente && this.paciente.cpf && this.paciente.cpf.length);
  }

  public enviar(): void {
    const paciente =  new Paciente(this.formulario.value);

    this.service.salvar(paciente, this.ehEdicao).subscribe((pacienteSalvo: Paciente) => {
      alert(`Paciente salvo com sucesso!! nome = ${pacienteSalvo.primeiroNome} cpf = ${pacienteSalvo.cpf}`);
      this.router.navigate(['paciente']);
    });
  }

}
