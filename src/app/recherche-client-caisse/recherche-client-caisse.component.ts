import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recherche-client-caisse',
  templateUrl: './recherche-client-caisse.component.html',
  styleUrls: ['./recherche-client-caisse.component.css']
})
export class RechercheClientCaisseComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  retour(){
   this.location.back();
  }
}
