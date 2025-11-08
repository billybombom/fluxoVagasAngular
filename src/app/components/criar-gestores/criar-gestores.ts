import { Component, signal, WritableSignal } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Gestores, GestoresParaCriar } from '../../models/gestores';
import { NonNullAssert } from '@angular/compiler';
import { ListarGestoresService } from '../../services/listar-gestores-service';
import { Departamentos } from '../../models/departamentos';
import { ListarDepartamentosService } from '../../services/listar-departamentos-service';
import { ListarVagasService } from '../../services/listar-vagas-service';
import { ListarGestores } from '../listar-gestores/listar-gestores';

@Component({
  selector: 'app-criar-gestores',
  imports: [ReactiveFormsModule],
  templateUrl: './criar-gestores.html',
  styleUrl: './criar-gestores.scss',
})
export class CriarGestores {

  constructor(private serviceDepartamentos: ListarDepartamentosService, private serviceGestores: ListarGestoresService) { }

  arrayDepartamentos: WritableSignal<Departamentos[]> = signal([])
  arrayGestores: WritableSignal<Gestores[]> = signal([])
  ngOnInit() {
    this.reqDepartamentos()
  }
  reqDepartamentos(): void {
    this.serviceDepartamentos.getDepartamentos().subscribe({
      next: respostaReq => {
        this.arrayDepartamentos.set(respostaReq)
        console.log(respostaReq)
      },
      error: erro => console.log(erro)
    })
  }
  reqGestores(): void {
    this.serviceGestores.getGestores().subscribe({
      next: respostaReq => {
        this.arrayGestores.set(respostaReq)
        console.log(respostaReq)
      },
      error: erro => console.log(erro)
    })
  }

  //Passos para criar um formGroup
  //1- instanciar new FormGroup
  //2- Passar o modelo do form usando <{}> assim voce passa o tipo de cada input do seu form, ex: nome: FormControl<Model['propriedade']>
  //3 Criar a instancia do FormControl que recebe alguns parametros, como deve iniciar, e validações como pode ser null (a criação desse objeto é entre os parametros do FormGroup, pense que é a mesma ideia de uma requisição, voce passa o modelo da requisição e depois passa os parametros, a diferança aqui é que é um obj que se relaciona ao de cima)

  formulario = new FormGroup<{
    nome: FormControl<GestoresParaCriar['nome']>,
    email: FormControl<GestoresParaCriar['email']>,
    cargo: FormControl<GestoresParaCriar['cargo']>,
    departamentoId: FormControl<GestoresParaCriar['departamentoId']>
  }>({
    nome: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true
    }),
    email: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true
    }),
    cargo: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true
    }),
    departamentoId: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true
    })
  })

  criarGestor(): void {
    const criarGestor: GestoresParaCriar = this.formulario.getRawValue()
    if (this.formulario.valid) {
      this.serviceGestores.criarGestor(criarGestor).subscribe({
        next: gestorCriado => {
          alert(`Gestor ${criarGestor.nome} Criado!`)
          this.arrayGestores.update(lista => [...lista, gestorCriado])
          this.formulario.reset()
        },
        error: erro => console.log(erro)
      })
    }else{
      alert('Insira as informações necessárias')
    }
  }


}
