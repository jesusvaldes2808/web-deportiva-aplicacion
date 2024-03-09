import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NewsComponent } from './news/news.component';
import { MaterialModule } from '../material/material.module';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    NewsComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
  ]
})
export class SharedModule { }
