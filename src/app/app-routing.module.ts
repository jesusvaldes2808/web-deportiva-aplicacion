import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'campeonato',
    loadChildren: ()=> import('./campeonato/campeonato.module').then(m=> m.CampeonatoModule)
  },
  {
    path: '**',
    redirectTo: 'campeonato'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
