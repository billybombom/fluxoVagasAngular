import { Routes } from '@angular/router';
import { ListarVagas } from './components/listar-vagas/listar-vagas';
import { ListarGestores } from './components/listar-gestores/listar-gestores';
import { ListarDepartamentos } from './components/listar-departamentos/listar-departamentos';

export const routes: Routes = [
    {path: '',component: ListarVagas},
    {path: 'gestores', component: ListarGestores},
    {path: 'departamentos', component: ListarDepartamentos}
];
