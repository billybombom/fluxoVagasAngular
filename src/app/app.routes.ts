import { Routes } from '@angular/router';
import { ListarVagas } from './components/listar-vagas/listar-vagas';
import { ListarGestores } from './components/listar-gestores/listar-gestores';
import { ListarDepartamentos } from './components/listar-departamentos/listar-departamentos';
import { CriarDepartamentos } from './components/criar-departamentos/criar-departamentos';
import { CriarGestores } from './components/criar-gestores/criar-gestores';

export const routes: Routes = [
    {path: '',component: ListarVagas},
    {path: 'gestores', component: ListarGestores},
    {path: 'departamentos', component: ListarDepartamentos},
    {path: 'criarDerpatamento', component: CriarDepartamentos},
    {path: 'criarGestor', component: CriarGestores}
];
