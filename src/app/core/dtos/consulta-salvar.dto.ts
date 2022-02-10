import { Consulta, Medico, Paciente } from "@entities"
import * as moment from "moment";

export class ConsultaSalvarDto {
    crm!: string
    cpf!: string
    horarioConsulta!: Date;

    public toConsulta(): Consulta {
        return new Consulta({
            medico: new Medico({crm: this.crm}),
            paciente: new Paciente({cpf: this.cpf}),
            horarioConsulta: this.horarioConsulta
        });
    }

     public get horarioConsultaFormatado(): string {
        const horarioConsulta = this.horarioConsulta ?? new Date();
        return moment(horarioConsulta).format('YYYY-MM-DD HH:mm:ss');
    }

    public toJSON() {
        return { 
            crm: this.crm,
            cpf: this.cpf,
            horarioConsulta: this.horarioConsultaFormatado,
        }
    }

    constructor(init?: Partial<ConsultaSalvarDto>) {
        if (init && init.horarioConsulta){
            init.horarioConsulta = new Date(init.horarioConsulta);
        }
        Object.assign(this, init);
    }
}