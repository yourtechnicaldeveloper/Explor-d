import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/core_auth/auth/auth.service';
import { stat } from 'fs';

@Component({ templateUrl: 'login.component.html' ,
styleUrls: ['./login.component.scss'],})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  errorMessage: string;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  get f() { return this.loginForm.controls; }

  login() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe((data) => {
      if (data) {
        this.router.navigateByUrl('/pages');
        // alert('Login form submited successfully!');
      }
    }, (error) => {
      alert('Email OR Password incorrect!');
    });
  }
}
