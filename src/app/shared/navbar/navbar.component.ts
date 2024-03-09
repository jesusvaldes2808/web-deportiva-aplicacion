import { Component } from '@angular/core';

interface MenuItem {
  name: string,
  path: string,
}

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public menuItem: MenuItem[] = [
    { name: 'Noticias' , path: '/campeonato/noticias'},
    { name: 'Equipos' , path: '/campeonato/equipos'},
    { name: 'Partidos' , path: '/campeonato/partidos'},
    { name: 'Tabla de Posicion' , path: '/campeonato/tabla-posicion'},
  ]

}
