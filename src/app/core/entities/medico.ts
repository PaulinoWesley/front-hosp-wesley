export class Medico {
    nome!: string;
    crm!: string

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

    constructor(init?: Partial<Medico>) {
        Object.assign(this, init);
    }
}
