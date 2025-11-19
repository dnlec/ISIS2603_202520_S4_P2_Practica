import { Component, OnInit, Output } from '@angular/core';
import { Emprendedor } from '../emprendedor';
import { emprendedorService } from '../emprendedor.service';

@Component({
  selector: 'app-emprendedor-list',
  standalone: false,
  templateUrl: './emprendedor-list.component.html',
  styleUrl: './emprendedor-list.component.css'
})
export class EmprendedorListComponent implements OnInit {
  emprendedores: Array<Emprendedor> = [];
  @Output() emprendedorSeleccionado: Emprendedor | null = null;
  seleccionado = false;

  constructor (private emprendedorService: emprendedorService) {  }

  getEmprendedores() {
    this.emprendedorService.getEmprendedores().subscribe((emprendedores) => {
      this.emprendedores = emprendedores;
    })
  }
  
  seleccionarEmprendedor(emprendedor: Emprendedor): void {
    this.emprendedorSeleccionado = emprendedor;
    this.seleccionado = true;
  }


  ngOnInit(): void {
    this.getEmprendedores();
  }
}
