import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

import {AlertService, AuthenticationService, UserService} from '../../../_services/index';
import {FormasDePagamentoService} from '@app/_services/formasDePagamento.service';

@Component({templateUrl: 'formasDePagamento.component.html'})
export class FormasDePagamentoComponent implements OnInit {

  formasDePagamentoForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private formasDePagamentoService: FormasDePagamentoService,
    private userService: UserService,
    private alertService: AlertService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/formasDePagamento']);
    }
  }

  ngOnInit() {
    this.formasDePagamentoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      porcentagemDesconto: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.formasDePagamentoForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formasDePagamentoForm.invalid) {
      return;
    }

    this.loading = true;
    this.formasDePagamentoService.cadastrar(this.formasDePagamentoForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registrado com sucesso!', true);
          this.router.navigate(['/formasDePagamento-listar']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
