import { Component, signal, WritableSignal } from '@angular/core';
import { Form, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DepartamentoCriar, Departamentos } from '../../models/departamentos';
import { ListarDepartamentos } from '../listar-departamentos/listar-departamentos';
import { ListarDepartamentosService } from '../../services/listar-departamentos-service';

@Component({
  selector: 'app-criar-departamentos',
  imports: [ReactiveFormsModule],
  templateUrl: './criar-departamentos.html',
  styleUrl: './criar-departamentos.scss',
})
export class CriarDepartamentos {

  constructor(private serviceDepartamentos: ListarDepartamentosService) { }
  ngOnInit() {
    this.carregarDepartamentos()
  }
  arrayDepartamentos: WritableSignal<Departamentos[]> = signal([])
  carregarDepartamentos(): void {
    this.serviceDepartamentos.getDepartamentos().subscribe({
      next: respostaReq => {
        this.arrayDepartamentos.set(respostaReq)
        console.log(respostaReq)
      },
      error: erro => console.log(erro)
    })
  }

  formulario = new FormGroup<{ //Primeiro obj apenas pra tipagem, determinando o model do meu formulário
    departamento: FormControl<Departamentos['departamento']>
  }>({ // esse obj cria os meus controls do meu formulário
    departamento: new FormControl('', { validators: [Validators.required], nonNullable: true })
  })

  imprimir(): void {
    const departamentoCreate: DepartamentoCriar = this.formulario.getRawValue()
    if (this.formulario.valid) {
      this.serviceDepartamentos.criarDepartamento(departamentoCreate).subscribe({
        next: novoPost => {
          this.arrayDepartamentos.update(lista => [...lista, novoPost])
          alert(`Departamento: ${departamentoCreate.departamento} Criado com Sucesso`)
          this.formulario.reset()
        }
      })
    }else{
      alert('Insira o nome do departamento')
      return
    }
  }


}
