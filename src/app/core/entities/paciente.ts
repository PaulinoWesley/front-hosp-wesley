export class Paciente {
    nome!: string;
    cpf!: string;
    dataNascimento!: Date;

    public get dataNascimentoJson(): string {
        const dataNascimento = this.dataNascimento;
        dataNascimento.setUTCHours(0,0,0,0);
        const ano = dataNascimento.getFullYear();
        const m = dataNascimento.getMonth() + 1;
        const d = dataNascimento.getDate();
        const mes = m > 9? m : '0'+ m;
        const dia = d > 9? d : '0' + d;
        return `${ano}-${mes}-${dia}`;
    }

    public get primeiroNome(): string {
        const nomeSeparado = this.nome.trim().split(' ')
        if (nomeSeparado.length > 0)
            return nomeSeparado[0]
        return '';
    }

    public get sobrenome(): string {
        const nomeSeparado = this.nome.trim().split(' ')
        if (nomeSeparado.length > 1)
            return nomeSeparado[nomeSeparado.length - 1]
        return '';
    }

    constructor(init?: Partial<Paciente>){
        if(init?.dataNascimento) {
            init.dataNascimento = new Date(init.dataNascimento);
        }
        Object.assign(this, init);
    }
}
