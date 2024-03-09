import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticiasComponent } from './page/noticias/noticias.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { TablaPosicionComponent } from './page/tabla-posicion/tabla-posicion.component';
import { EquipoComponent } from './page/equipo/equipo.component';
import { PartidosComponent } from './page/partidos/partidos.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      { path: 'noticias', component: NoticiasComponent },
      { path: 'partidos', component: PartidosComponent },
      { path: 'equipos', component: EquipoComponent },
      { path: 'tabla-posicion', component: TablaPosicionComponent },
      { path: '**', redirectTo: 'noticias' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampeonatoRoutingModule { }
