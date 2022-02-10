import { Medico, Paciente } from "@entities";

import * as moment from 'moment';


export class Consulta {
    id!: number;
    medico!: Medico;
    paciente!: Paciente;
    horarioConsulta!: Date;

    public get horarioConsultaFormatado(): string {
        const horarioConsulta = this.horarioConsulta ?? new Date();
        return moment(horarioConsulta).format('YYYY-MM-DDThh:mm:ss');
    }

    public toJSON() {
        return {
            medico: this.medico.toJSON(),
            paciente: this.paciente.toJSON(),
            horarioConsulta: this.horarioConsultaFormatado,
        }
    }

    constructor(init?: Partial<Consulta>) {
        if (init && init.horarioConsulta){
            init.horarioConsulta = new Date(init.horarioConsulta);
        }
        Object.assign(this, init);
    }
}
