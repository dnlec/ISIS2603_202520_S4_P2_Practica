import { Component, Input, OnInit } from '@angular/core';
import { Emprendedor } from '../emprendedor';
import { EmprendedorDetail } from '../emprendedor-detail';
import { ActivatedRoute } from '@angular/router';
import { emprendedorService } from '../emprendedor.service';

@Component({
  selector: 'app-emprendedor-detail',
  standalone: false,
  templateUrl: './emprendedor-detail.component.html',
  styleUrl: './emprendedor-detail.component.css'
})
export class EmprendedorDetailComponent implements OnInit {
  emprendedorId!: string;
  @Input() emprendedorDetail: EmprendedorDetail | null = null;

  constructor (
    private route: ActivatedRoute,
    private emprendedorService: emprendedorService
  ) {  }

  getEmprendedor() {
    this.emprendedorService.getEmprendedor(this.emprendedorId).subscribe((emprendedor) => {
      this.emprendedorDetail = emprendedor;
    })
  }

  ngOnInit(): void {
    if (this.emprendedorDetail === null) {
      this.emprendedorId = this.route.snapshot.paramMap.get('id')!;
      if (this.emprendedorId) {
        this.getEmprendedor();
      }
    }
    console.log(this.emprendedorDetail);
  }
}
