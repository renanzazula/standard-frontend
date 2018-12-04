import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';

import {AuthenticationService} from '@app/_services';
import {DominioService} from "@app/_services/dominio.service";
import {Dominio} from "@app/_models/dominio";

@Component({templateUrl: 'dominio-listar.component.html'})
export class DominioListarComponent implements OnInit {


  dominios: Dominio[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private dominioService: DominioService,
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/dominio-listar']);
    }
  }


  ngOnInit() {
    return this.dominioService.consultar().subscribe(
      (dominio: any[]) => {
        this.dominios = dominio
      },
      (error) => console.log(error)
    );
  }

  // // convenience getter for easy access to form fields
  // get f() {
  //   return this.dominioForm.controls;
  // }


}
