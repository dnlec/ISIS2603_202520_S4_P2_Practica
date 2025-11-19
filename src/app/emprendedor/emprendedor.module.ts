import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmprendedorListComponent } from './emprendedor-list/emprendedor-list.component';
import { EmprendedorDetailComponent } from './emprendedor-detail/emprendedor-detail.component';
import { AppRoutingModule } from "../app-routing.module";



@NgModule({
  declarations: [
    EmprendedorListComponent,
    EmprendedorDetailComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
],
  exports: [
    EmprendedorListComponent
  ]
})
export class EmprendedorModule { }
