import { Component, signal, WritableSignal } from '@angular/core';
import { ListarDepartamentosService } from '../../services/listar-departamentos-service';
import { Departamentos } from '../../models/departamentos';
import { consumerMarkDirty } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-listar-departamentos',
  imports: [],
  templateUrl: './listar-departamentos.html',
  styleUrl: './listar-departamentos.scss',
})
export class ListarDepartamentos {
  constructor(private serviceDepartamentos: ListarDepartamentosService) { }
  ngOnInit() {
    this.listarDepartamentos()
  }
  arrayDepartamentos: WritableSignal<Departamentos[]> = signal([])
  listarDepartamentos(): void {
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

  excluirDepartamento(idDerp: string) {
    this.serviceDepartamentos.deleteDepartamento(idDerp).subscribe({
      next: respostaReq => {
        alert('Departamento Excluido')
        console.log('Departamento excluido')
        this.arrayDepartamentos.update(array => array.filter(departamento => departamento.id !== idDerp))

      },
      error: erro => {
        console.log()
      }
    })
  }
}
