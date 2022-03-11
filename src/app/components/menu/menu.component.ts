import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'wsg-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public isPaginaAtiva(pagina: string): boolean {
    return this.router.url == pagina;
  }

  public navegarParaPagina(pagina: string): void {
    const url = `/${pagina}`;

    this.router.navigate([url]);
  }
}
