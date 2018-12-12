import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

import {AlertService, AuthenticationService, UserService} from '../../../_services/index';
import {MarcaService} from '@app/_services/marca.service';

@Component({templateUrl: 'marca.component.html'})
export class MarcaComponent implements OnInit {
  marcaForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private marcaService: MarcaService,
    private userService: UserService,
    private alertService: AlertService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/marca']);
    }
  }

  ngOnInit() {
    this.marcaForm = this.formBuilder.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.marcaForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.marcaForm.invalid) {
      return;
    }

    this.loading = true;
    this.marcaService.cadastrar(this.marcaForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registrado com sucesso!', true);
          this.router.navigate(['/marca-listar']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
