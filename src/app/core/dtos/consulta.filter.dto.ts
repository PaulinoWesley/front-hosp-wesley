import { Consulta, Medico, Paciente } from "@entities";

export class ConsultaFilterDto {
    cpfPaciente!: string;
    crmMedico!: string;

    constructor(init?: Partial<ConsultaFilterDto>) {
        Object.assign(this, init);
    }
    
}
