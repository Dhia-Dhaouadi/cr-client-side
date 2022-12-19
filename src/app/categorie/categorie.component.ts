import {
  ChangeDetectorRef,
  Component,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesModel } from '../model/Categorie.model';
import { CategoriesService } from '../services/categories.service';
import { formatDate } from '@angular/common';
import Swal from 'sweetalert2';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css'],
})
export class CategorieComponent implements OnInit {
  Categories: any;
  Categorie = new CategoriesModel();
  id: any;
  categor: any;
  prod: any;
  catt: any;
  Page: number = 1;
  Count: number = 0;
  TableSize: number = 5;
  TableSizes: any = [5, 10, 15, 20];
  response: any;
  constructor(
    private modalService: NgbModal,
    private categorieservice: CategoriesService,
    private productservice: ProduitService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    setInterval(() => {
      this.Getcategories();
      this.changeDetector.detectChanges();
    }, 1000);
    this.Categorie.Dateajoutcat = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    this.Categorie.TVA = 0;
    this.Categorie.Affichage = 'Desactivé';
    this.Categorie.Categorie = 'exemple';
    this.Categorie.Affichagecuisine = 'exemple cuisine';
  }

  Getcategories() {
    this.categorieservice.getCategoryData().subscribe((res) => {
      this.Categories = res;
    });
  }

  Getproducts() {
    this.productservice.getProductsData().subscribe((res) => {
      this.prod = res;
    });
  }

  Addcategorie() {
    this.categorieservice.addCat(this.Categorie).subscribe((res) => {
      this.response = res;
      this.Getcategories();
      if (this.response.message == 'Categorie created succefully') {
        Swal.fire({
          position: 'top-end',
          title: 'Catégorie ajoutée',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'success',
        });
      } else {
        Swal.fire({
          position: 'top-end',
          title: 'Quelque chose ne va pas',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'error',
        });
      }
    });
  }

  Catdetailes() {
    this.id = this.Categories.id;
    this.categorieservice.getCategorieById(this.id).subscribe((res) => {
      this.categor = res;
    });
  }

  updatecategoprie(cat: CategoriesModel) {
    this.categorieservice.updateCategory(cat.id, cat).subscribe((res) => {
      this.response = res;
      this.Getcategories();
      if (this.response.message == 'Categorie updated succefully') {
        Swal.fire({
          position: 'top-end',
          title: 'Catégorie modifiée',
          text: '',
          showConfirmButton: false,
          timer: 1500,
          icon: 'success',
        });
      } else {
        Swal.fire({
          position: 'top-end',
          title: 'Quelque chose ne va pas',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'error',
        });
      }
    });
  }

  openXlModal(content: TemplateRef<any>) {
    this.modalService
      .open(content, { size: 'xl' })
      .result.then((result) => {
        console.log('Modal closed' + result);
      })
      .catch((res) => {});
  }

  OnTableDataChange(event: any) {
    this.Page = event;
    this.Getcategories();
  }

  OnTableSizechange(event: any) {
    this.TableSize = event.target.value;
    this.Page = 1;
    this.Getcategories();
  }
}
