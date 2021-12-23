export class Consulta {
    nomePaciente!: string;
    nomeMedico!: string;
    horarioConsulta!: Date;


    public get primeiroNomePaciente(): string {
        const nomeSeparado = this.nomePaciente.trim().split(' ')
        if (nomeSeparado.length > 0)
            return nomeSeparado[0]
        return '';
    }

    public get sobrenomePaciente(): string {
        const nomeSeparado = this.nomePaciente.trim().split(' ')
        if (nomeSeparado.length > 1)
            return nomeSeparado[nomeSeparado.length - 1]
        return '';
    }

    public get primeiroNomeMedico(): string {
        const nomeSeparado = this.nomeMedico.trim().split(' ')
        if (nomeSeparado.length > 0)
            return nomeSeparado[0]
        return '';
    }

    public get sobrenomeMedico(): string {
        const nomeSeparado = this.nomeMedico.trim().split(' ')
        if (nomeSeparado.length > 1)
            return nomeSeparado[nomeSeparado.length - 1]
        return '';
    }

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
            nomePaciente: this.nomePaciente,
            nomeMedico: this.nomeMedico,
            horarioConsulta: this.horarioConsultaJson,
        }
    }

    constructor(init?: Partial<Consulta>) {
        Object.assign(this, init);
    }
}
