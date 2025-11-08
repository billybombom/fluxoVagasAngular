import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vagas } from '../models/vagas';

@Injectable({
  providedIn: 'root',
})
export class ListarVagasService {
    private http = inject(HttpClient)
    private readonly urlBase = 'http://localhost:3000/vagas'

    getVagas(): Observable<Vagas[]>{
      return this.http.get<Vagas[]>(this.urlBase)
    }
    deleteVaga(idVaga: string): Observable<Vagas[]>{
      return this.http.delete<Vagas[]>(this.urlBase + `/${idVaga}`)
    }
}
