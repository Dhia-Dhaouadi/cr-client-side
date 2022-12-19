import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup | any;
  submitted: false | any;
  data: any;
  token: any;
  returnUrl: any;
  response: any;
  userData: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private loginservice: LoginService
  ) {}

  ngOnInit(): void {
    this.loginForm();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    console.log(this.returnUrl)
  }

  loginForm() {
    this.form = this.formBuilder.group({
      CodeEntreprise: ['', [Validators.required]],
      NomEntreprise: ['', [Validators.required]],
      Login: ['', [Validators.required]],
    });
  }
  get f() {
    return this.form.controls;
  }

  Login() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.loginservice.LoginAuth(this.form.value).subscribe((res) => {
      this.response = res;
      if (this.response.message == 'Vous êtes connecté') {
        Swal.fire({
          position: 'top-end',
          title: 'Vous êtes connecté',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'success',
        });
        this.token = this.response.Token;
        localStorage.setItem('isLoggedin', this.token);
        if (localStorage.getItem('isLoggedin')) {
          this.userData=jwt_decode(this.token);
          if (this.userData.Role=='Administrateur'){
            this.router.navigate(['/']);
          }
          else if (this.userData.Role=='Caissier'){
            this.router.navigate(['/Caisse']);
          }
          else if (this.userData.Role=='Cuisinier'){
            this.router.navigate(['/Cuisine']);
          }
          else{}
        }
      } else if (
        this.response.message == 'Vérifier Code Entreprise ou Nom Entreprise !'
      ) {
        Swal.fire({
          position: 'top-end',
          title: 'Vérifier Code Entreprise ou Nom Entreprise !',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'error',
        });
      } else if (this.response.message == 'Vérifier Mot de Passe !') {
        Swal.fire({
          position: 'top-end',
          title: 'Vérifier Mot de Passe !',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'error',
        });
      } else {
        Swal.fire({
          position: 'top-end',
          title: 'Quelque chose ne va pas !',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'error',
        });
        window.location.reload();
      }
    });
  }
}
