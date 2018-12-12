import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

// used to create fake backend
import {ErrorInterceptor, fakeBackendProvider, JwtInterceptor} from './_helpers';

import {AppComponent} from '@app/app.component';
import {HomeComponent} from '@app/home';
import {MenuComponent} from '@app/menu/menu.component';
import {AlertComponent} from '@app/_components/alert/index';
import {RegisterComponent} from '@app/register';
import {LoginComponent} from '@app/login';
import {DominioComponent} from '@app/_components/cadastro/dominio/index';
import {DominioListarComponent} from '@app/_components/consulta/domino/index';
import {MarcaComponent} from '@app/_components/cadastro/marca/marca.component';
import {FormasDePagamentoComponent} from '@app/_components/cadastro/formasDePagemento';

import {routing} from '@app/app.routing';
import {MarcaListarComponent} from '@app/_components/consulta/marca';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DominioComponent,
    DominioListarComponent,
    MenuComponent,
    MarcaComponent,
    MarcaListarComponent,
    FormasDePagamentoComponent
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
