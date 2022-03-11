import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Consulta } from '@entities';
import { ConsultaSalvarDto } from 'src/app/core/dtos/consulta-salvar.dto';
import { FormularioService } from './formulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  public formulario: FormGroup = new FormGroup({});
  public consulta: Consulta = new Consulta();
  constructor(
    private formBuilder: FormBuilder,
    private service: FormularioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.criarFormulario();
    this.carregarConsultaSelecionada();
  }

  private criarFormulario(): void {
    this.formulario = this.formBuilder.group({
      crm: null,
      cpf: null,
      horarioConsulta: null,
    });
  }

  public enviar(): void {
    const consultaParaSalvarDto = new ConsultaSalvarDto(this.formulario.value)

    this.service.salvar(consultaParaSalvarDto, this.ehEdicao).subscribe((consultaSalva: Consulta) => {
      alert(`A Consulta foi salva`);
      this.router.navigate(['/consulta']);
    });
  }

  public limpar(): void {
    this.formulario.reset();
  }

  public get ehEdicao(): boolean {
    return !!(this.consulta && this.consulta.id);
  }

  public carregarConsultaSelecionada(): void {
    const consultaSelecionada = this.route.snapshot.data['consulta'];

    if (consultaSelecionada && consultaSelecionada.id) {
      this.consulta = consultaSelecionada;
      this.patchConsultaToFormulario();
    }
  }

  private patchConsultaToFormulario() {
    this.formulario.get('cpf')?.setValue(this.consulta.paciente.cpf);
    this.formulario.get('crm')?.setValue(this.consulta.medico.crm);
    this.formulario.get('horarioConsulta')?.setValue(this.consulta.horarioConsultaFormatado);
  }

  public voltarParaListagem(): void {
    this.router.navigate(['/consulta']);
  }

}
