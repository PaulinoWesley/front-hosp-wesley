import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Paciente } from "@entities";
import { PacienteService } from "@services";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class PacienteResolver implements Resolve<Observable<Paciente>> {
    constructor(private service: PacienteService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Paciente> {
        const cpf: string = route.params['cpf'];

        return this.service.buscarPorCpf(cpf);
    }
}
