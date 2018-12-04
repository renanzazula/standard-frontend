﻿import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '@environments/environment';
import {Dominio} from "@app/_models/dominio";

@Injectable({ providedIn: 'root' })
export class DominioService {

    constructor(private http: HttpClient) { }

    consultar() {
        return this.http.get<Dominio[]>(`${environment.apiUrl}/dominios`);
    }

    getById(id: number) {
        return this.http.get(`${environment.apiUrl}/dominios/${id}`);
    }

    cadastrar(dominio: Dominio) {
        return this.http.post(`${environment.apiUrl}/dominios`, dominio);
    }

    alterar(dominio: Dominio) {
        return this.http.put(`${environment.apiUrl}/dominios/${dominio.codigo}`, dominio);
    }

    excluir(id: number) {
        return this.http.delete(`${environment.apiUrl}/dominios/${id}`);
    }
}
