import { Component, OnInit } from '@angular/core';
import { UsersModel } from '../model/Users.model';
import { UsersService } from '../services/users.service';
import { formatDate } from '@angular/common';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
})
export class AdduserComponent implements OnInit {
  user = new UsersModel();
  isDisabled: Boolean = false;
  response: any;
  constructor(private userservice: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.user.Email = 'emxple@exemple.com';
    this.user.NomEntreprise = 'Urbanfoods';
    this.user.CodeEntreprise = '7421000';
    this.user.Role = 'Administrateur';
    this.user.NomUser = 'User';
    this.user.PrenomUser = 'User';
    this.user.Telephone = 0;
    this.user.DateAjout = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  }

  Adduser() {
    this.userservice.addUser(this.user).subscribe((res) => {
      this.response = res;
      if (this.response.message == 'User added successfully') {
        Swal.fire({
          position: 'top-end',
          title: 'Utilisateur ajouté',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'success',
        });
        if (this.user.Role == 'Caissier') {
          this.router.navigate(['/Caissier']);
        } else if (this.user.Role == 'Cuisinier') {
          this.router.navigate(['/Cuisinier']);
        } else if (this.user.Role == 'Livreur') {
          this.router.navigate(['/Livreur']);
        } else if (this.user.Role == 'Pointage') {
          this.router.navigate(['/Pointage']);
        } else {
          window.location.reload();
        }
      } else if (this.response.message == 'Login already exist !') {
        Swal.fire({
          position: 'top-end',
          title: 'Mot de Passe existe déja',
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
