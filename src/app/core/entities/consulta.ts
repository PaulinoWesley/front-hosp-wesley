import { Medico, Paciente } from "@entities";

export class Consulta {
    id!: number;
    medico!: Medico;
    paciente!: Paciente;
    horarioConsulta!: Date;

    public get horarioConsultaJson(): string {
        const horarioConsulta = this.horarioConsulta;
        horarioConsulta.setUTCHours(0,0,0,0);
        const ano = horarioConsulta.getFullYear();
        const m = horarioConsulta.getMonth() + 1;
        const d = horarioConsulta.getDate();
        const mes = m > 9? m : '0'+ m;
        const dia = d > 9? d : '0' + d;
        return `${ano}-${mes}-${dia}`;
    }

    public toJSON() {
        return {
            medico: this.medico.toJSON(),
            paciente: this.paciente.toJSON(),
            horarioConsulta: this.horarioConsultaJson,
        }
    }

    constructor(init?: Partial<Consulta>) {
        Object.assign(this, init);
    }
}
