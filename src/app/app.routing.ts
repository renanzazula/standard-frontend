import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {RegisterComponent} from './register';
import {AuthGuard} from './_guards';
import {DominioComponent} from '@app/_components/cadastro/dominio/index';
import {DominioListarComponent} from '@app/_components/consulta/domino/index';
import {MarcaComponent} from '@app/_components/cadastro/marca';
import {FormasDePagamentoComponent} from '@app/_components/cadastro/formasDePagemento';
import {MarcaListarComponent} from '@app/_components/consulta/marca';

const appRoutes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'cadastrar', component: RegisterComponent},
  {path: 'dominio', component: DominioComponent},
  {path: 'dominio-listar', component: DominioListarComponent},

  {path: 'formasDePagamento', component: FormasDePagamentoComponent},
  {path: 'marca', component: MarcaComponent},
  {path: 'marca-listar', component: MarcaListarComponent},

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
