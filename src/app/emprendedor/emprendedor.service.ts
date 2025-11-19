import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmprendedorDetail } from './emprendedor-detail';
import { Emprendedor } from './emprendedor';

@Injectable({
  providedIn: 'root'
})
export class emprendedorService {

  constructor(private http: HttpClient) {  }

  getEmprendedores(): Observable<Emprendedor[]> {
    return this.http.get<Emprendedor[]>("https://raw.githubusercontent.com/k-garces/ISIS2603_202520_S4_P2_Practica/refs/heads/main/json/emprendedores.json");
  }

  getEmprendedor(id: string): Observable<EmprendedorDetail> {
    return this.http.get<EmprendedorDetail>("https://raw.githubusercontent.com/k-garces/ISIS2603_202520_S4_P2_Practica/refs/heads/main/json/" + id + "/emprendedor.json");  
  }
}
