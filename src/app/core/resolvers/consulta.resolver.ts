import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { Consulta } from "@entities";
import { ConsultaService } from "@services";


@Injectable({ providedIn: 'root' })
export class ConsultaResolver implements Resolve<Observable<Consulta>> {
    constructor(private service: ConsultaService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Consulta> {
        const id: number = route.params['id'];
        return this.service.getById(id);
    }
}
