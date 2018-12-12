import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

import {AlertService, AuthenticationService, UserService} from '../../../_services/index';
import {DominioService} from '../../../_services/dominio.service';

@Component({templateUrl: 'dominio.component.html'})
export class DominioComponent implements OnInit {
  dominioForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private dominioService: DominioService,
    private userService: UserService,
    private alertService: AlertService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/dominio']);
    }
  }

  ngOnInit() {
    this.dominioForm = this.formBuilder.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],

    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.dominioForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.dominioForm.invalid) {
      return;
    }

    this.loading = true;
    this.dominioService.cadastrar(this.dominioForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/dominio-listar']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
