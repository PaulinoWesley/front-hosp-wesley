import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Consulta } from '@entities';
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
    private router: Router
  ) { }

  ngOnInit(): void {
    this.criarFormulario();
  }

  private criarFormulario(): void {
    this.formulario = this.formBuilder.group({
      crm: null,
      cpf: null,
      horarioConsulta: new Date
    });
  }

  public enviar(): void {
    const consulta = new Consulta(this.formulario.value)

    this.service.salvar(consulta, this.ehEdicao).subscribe((consultaSalva: Consulta) => {
      alert(`A Consulta foi salva`);
      consultaSalva;
      this.router.navigate(['/consulta']);
    });
  }

  public limpar(): void {
    this.formulario.reset();
  }

  public get ehEdicao(): boolean {
    return !!(this.consulta && this.consulta.id);
  }

}
