import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ClientModel } from '../model/Client.model';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css'],
})
export class AddclientComponent implements OnInit {
  client = new ClientModel();
  response: any;
  constructor(private clientservice: ClientService, private router: Router) {}

  ngOnInit(): void {
    this.client.NomClient = 'Entrer Nom';
    this.client.PrenomClient = 'Entrer Prénom';
    this.client.Civilite = 'M';
    this.client.Societe = 'Entrer societe';
    this.client.Telephone = 0;
    this.client.Email = 'exemple@gmail.com';
    this.client.DateNaissance = '2022-11-11';
    this.client.Adresse = 'Entrer Adresse';
    this.client.Ville = 'Entrer Ville';
    this.client.Etage = 0;
    this.client.Code1 = 0;
    this.client.Code2 = 0;
    this.client.Code3 = 0;
    this.client.Sonette = 'Entrer sonette';
    this.client.CodePostal = 'Entrer code postal';
    this.client.NbrComa = 0;
    this.client.Montantfidilite = 0;
    this.client.Commentaire = 'Entrer commentaire';
    this.client.Batiment = 'N batiment';
    this.client.Codebarre = '0';
  }

  Addclient() {
    if (this.client.Montantfidilite > 500) {
      this.client.type = 'fidèle';
    } else {
      this.client.type = '';
    }
    this.clientservice.addClient(this.client).subscribe((res) => {
      this.response = res;
      if (this.response.message == 'Client created succefully') {
        Swal.fire({
          position: 'top-end',
          title: 'Client Ajouté',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'success',
        });
        if (this.client.type == 'fidèle') {
          this.router.navigate(['/Client fidele']);
        } else if (this.client.type == '') {
          this.router.navigate(['/Client']);
        } else {
          window.location.reload();
        }
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
