import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { DepartamentoCriar, Departamentos } from '../models/departamentos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListarDepartamentosService {
  private http = inject(HttpClient)
  private readonly urlBase = 'http://localhost:3000/departamento'
  getDepartamentos(): Observable<Departamentos[]> {
    return this.http.get<Departamentos[]>(this.urlBase)
  }
  deleteDepartamento(idDerp: string): Observable<Departamentos[]>{
    return this.http.delete<Departamentos[]>(this.urlBase + `/${idDerp}`)
  }
  criarDepartamento(dep: DepartamentoCriar): Observable<Departamentos> {
    return this.http.post<Departamentos>(this.urlBase,dep);
  }
}
