export class Paciente {
    nome!: string;
    cpf!: string;
    dataNascimento!: Date;

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
        Object.assign(this, init);
    }


}