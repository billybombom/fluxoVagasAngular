import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gestores, GestoresParaCriar } from '../models/gestores';

@Injectable({
  providedIn: 'root',
})
export class ListarGestoresService {
  private http = inject(HttpClient)
  private readonly urlBase = 'http://localhost:3000/gestor'
  getGestores():Observable<Gestores[]>{
    return this.http.get<Gestores[]>(this.urlBase)
  }
  criarGestor(gestorCriar: GestoresParaCriar): Observable<Gestores>{
    return this.http.post<Gestores>(this.urlBase,gestorCriar)
  }
  deleteGestor(idGestor: string): Observable<Gestores[]>{
    return this.http.delete<Gestores[]>(this.urlBase + `/${idGestor}`)
  }
  editGestor(idGestor: string, gestorParaEdit: Gestores[]): Observable<Gestores[]>{
    return this.http.put<Gestores[]>(this.urlBase + `${idGestor}`, gestorParaEdit)
  }
  

}
