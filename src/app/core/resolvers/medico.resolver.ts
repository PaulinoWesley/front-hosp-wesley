import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { Medico } from "@entities";
import { MedicoService } from "@services";


@Injectable({ providedIn: 'root' })
export class MedicoResolver implements Resolve<Observable<Medico>> {
    constructor(private service: MedicoService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Medico> {
        const crm: string = route.params['crm'];
        return this.service.buscarPorCrm(crm);
    }
}
