import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: NavbarComponent },
      { path: 'noticias', component: NewsComponent },
      { path: '**', redirectTo: '' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
