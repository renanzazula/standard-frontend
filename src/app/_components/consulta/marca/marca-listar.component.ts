import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {AuthenticationService} from '../../../_services/index';
import {MarcaService} from '@app/_services/marca.service';
import {Marca} from '@app/_models/marca';

@Component({templateUrl: 'marca-listar.component.html'})
export class MarcaListarComponent implements OnInit {

  marcas: Marca[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private marcaService: MarcaService,
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/marca-listar']);
    }
  }

  ngOnInit() {
    return this.marcaService.consultar().subscribe(
      (marca: any[]) => {
        this.marcas = marca
      },
      (error) => console.log(error)
    );
  }

  // // convenience getter for easy access to form fields
  // get f() {
  //   return this.dominioForm.controls;
  // }


}
