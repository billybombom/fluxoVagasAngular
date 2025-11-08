import { Component, signal, WritableSignal } from '@angular/core';
import { ListarGestoresService } from '../../services/listar-gestores-service';
import { Gestores } from '../../models/gestores';
import { ListarDepartamentosService } from '../../services/listar-departamentos-service';
import { Departamentos } from '../../models/departamentos';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-listar-gestores',
  imports: [RouterLink],
  templateUrl: './listar-gestores.html',
  styleUrl: './listar-gestores.scss',
})
export class ListarGestores {

  constructor(private serviceGestores: ListarGestoresService, private serviceDepartamentos: ListarDepartamentosService){}
  arrayGestores: WritableSignal<Gestores[]> = signal([])
  arrayDepartamentos: WritableSignal<Departamentos[]> = signal([])

  ngOnInit(){
    this.listarGestores()
    this.listarDepartamentos()
  }

  listarGestores():void{
    this.serviceGestores.getGestores().subscribe({
      next: respostaReq => {
        console.log(respostaReq)
        this.arrayGestores.set(respostaReq)
      },
      error: erro => {
        console.log(erro)
      }
    })
  }

  listarDepartamentos():void{
    this.serviceDepartamentos.getDepartamentos().subscribe({
      next: respostaReq => {
        console.log(respostaReq)
        this.arrayDepartamentos.set(respostaReq)
      },
      error: erro => {
        console.log(erro)
      }
    })
  }


  deletarGestor(idGestor: string):void{
    this.serviceGestores.deleteGestor(idGestor).subscribe({
      next: resposta => {
        alert('Gestor Excluido!')
        this.arrayGestores.update(array => array.filter(gestor => gestor.id !== idGestor))
      },
      error: erro => {
        console.log(erro)
      }
    })
  }


  encontrarDepartamento(idDerp: string):string{
    let procurandoDepartamento = this.arrayDepartamentos().find(idDep=> idDep.id == idDerp)
    if(procurandoDepartamento){
      return procurandoDepartamento.departamento
    }else{
      return 'Departamento não encontrado'
    }
  }

}
