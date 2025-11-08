import { Component, signal, WritableSignal } from '@angular/core';
import { ListarVagasService } from '../../services/listar-vagas-service';
import { Vagas } from '../../models/vagas';
import { ListarDepartamentosService } from '../../services/listar-departamentos-service';
import { Departamentos } from '../../models/departamentos';
import { identifierName } from '@angular/compiler';
import { ListarGestoresService } from '../../services/listar-gestores-service';
import { Gestores } from '../../models/gestores';

@Component({
  selector: 'app-listar-vagas',
  imports: [],
  templateUrl: './listar-vagas.html',
  styleUrl: './listar-vagas.scss',
})
export class ListarVagas {
  constructor(private serviceVagas: ListarVagasService, private serviceDepartamentos: ListarDepartamentosService, private serviceGestores: ListarGestoresService) { }
  
  arrayVagas: WritableSignal<Vagas[]> = signal([])
  arrayDepartamentos: WritableSignal<Departamentos[]> = signal([])
  arrayGestores: WritableSignal<Gestores[]> = signal([])


  ngOnInit() {
    this.listarVagas()
    this.listarGestores()
  }

  listarVagas(): void {
    this.serviceVagas.getVagas().subscribe({
      next: retornoReq => {
        this.arrayVagas.set(retornoReq)
        console.log(this.arrayVagas())
      },
      error: erro => {
        console.log(erro)
      }
    })
  }

  formatarData(isoData: string): string {
    return new Date(isoData).toLocaleDateString('pt-br')
  }
  listarGestores(): void {
    this.serviceGestores.getGestores().subscribe({
      next: retornoReq => {
        console.log(retornoReq)
        this.arrayGestores.set(retornoReq)      },
      error: erro => {
        console.log(erro)
      }
    })
  }

  deletarVaga(idVaga: string):void{
    this.serviceVagas.deleteVaga(idVaga).subscribe({
      next: respostaReq => {
        alert('Vaga Excluida!')
        console.log('Vaga excluida!')
      },
      error: erro => {
        console.log(erro  )
      }
    })
  }

  encontrarNomeGestor(gestorId: string): string {
    let procurandoNomeGestor =this.arrayGestores().find(idGest=> idGest.id ==  gestorId)
    if(procurandoNomeGestor){
      return procurandoNomeGestor.nome
    }else{
      return 'Gestor não encontrado'
    }
  }
}
