import { Consulta, Medico, Paciente } from "@entities"

export class ConsultaSalvarDto {
    crm!: string
    cpf!: string
    horarioConsulta!: Date

    public toConsulta(): Consulta {
        return new Consulta({
            medico: new Medico({crm: this.crm}),
            paciente: new Paciente({cpf: this.cpf})
        });
    }

    constructor(init?: Partial<ConsultaSalvarDto>) {
        Object.assign(this, init);
    }
}