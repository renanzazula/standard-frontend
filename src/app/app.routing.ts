import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {RegisterComponent} from './register';
import {AuthGuard} from './_guards';
import {DominioComponent} from "@app/dominio";
import {DominioListarComponent} from "@app/dominio/listar";

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'cadastrar', component: RegisterComponent },
    { path: 'dominio', component: DominioComponent },
    { path: 'dominio-listar', component: DominioListarComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
