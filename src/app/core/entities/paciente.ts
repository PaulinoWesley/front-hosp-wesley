import * as moment from 'moment'; 

export class Paciente {
    nome!: string;
    cpf!: string;
    dataNascimento!: Date;

    public get dataNascimentoJson(): string {
        const dataNascimento = this.dataNascimento ?? new Date();

        return moment(dataNascimento).format('YYYY-MM-DD');
    }

    public get primeiroNome(): string {
        const nomeSeparado = this.nome.trim().split(' ');
        if (nomeSeparado.length > 0)
            return nomeSeparado[0];
        return '';
    }

    public get sobrenome(): string {
        const nomeSeparado = this.nome.trim().split(' ')
        if (nomeSeparado.length > 1)
            return nomeSeparado[nomeSeparado.length - 1]
        return '';
    }

    public toJSON() {
        return {
            nome: this.nome,
            cpf: this.cpf,
            dataNascimento: this.dataNascimentoJson,
        }
    }

    constructor(init?: Partial<Paciente>){
        if(init?.dataNascimento) {
            init.dataNascimento = new Date(init.dataNascimento);
        }
        Object.assign(this, init);

    }
}
