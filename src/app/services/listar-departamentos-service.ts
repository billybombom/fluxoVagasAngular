import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Departamentos } from '../models/departamentos';
import { Observable } from 'rxjs';
import { identifierName } from '@angular/compiler';

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
}
