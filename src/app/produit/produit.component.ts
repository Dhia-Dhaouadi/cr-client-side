import {
  ChangeDetectorRef,
  Component,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductsModel } from '../model/Product.model';
import { CategoriesService } from '../services/categories.service';
import { ProduitService } from '../services/produit.service';
import { formatDate } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css'],
})
export class ProduitComponent implements OnInit {
  product = new ProductsModel();
  products: any;
  category: any;
  categ: any;
  cat: any;
  Page: number = 1;
  Count: number = 0;
  TableSize: number = 5;
  TableSizes: any = [5, 10, 15, 20];
  response: any;

  constructor(
    private modalService: NgbModal,
    private productservice: ProduitService,
    private categorieservice: CategoriesService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.product.unite = 'Pas unité';
    this.product.ProductName = 'exemple';
    this.product.Affichagecusine = 'exemple cuisine';
    this.product.Type = 'Pas composé';
    this.product.Affichage = 'Desactivé';
    this.product.Pricev = 0;
    this.product.Pricevp = 0;
    this.product.DateAjout = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    setInterval(() => {
      this.GetProducts();
      this.changeDetector.detectChanges();
    }, 1000);
    this.categorieservice.getCategoryData().subscribe((res) => {
      this.category = res;
    });
  }

  GetProducts() {
    this.productservice.getProductsData().subscribe((res) => {
      this.products = res;
    });
  }

  gettva(event: any) {
    this.cat = event.target.value;
    this.product.idCat = this.cat;
    this.categorieservice.getCategorieById(this.cat).subscribe((res) => {
      this.categ = res;
      this.product.TVA = this.categ[0].TVA;
      this.product.idCat = this.categ[0].id;
      this.product.categorie = this.categ[0].Categorie;
    });
  }

  Addproduit() {
    this.productservice.addProductsData(this.product).subscribe((res) => {
      this.response = res;
      this.GetProducts();
      if (this.response.message == 'Product created succefully') {
        Swal.fire({
          position: 'top-end',
          title: 'Produit ajouté',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'success',
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

  Updateproduit(prod: ProductsModel) {
    this.productservice.updateProduct(prod.id, prod).subscribe((res) => {
      this.response = res;
      this.GetProducts();
      if (this.response.message == 'Product updated succefully') {
        Swal.fire({
          position: 'top-end',
          title: 'Produit modifié',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'success',
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
    this.GetProducts();
  }

  OnTableSizechange(event: any) {
    this.TableSize = event.target.value;
    this.Page = 1;
    this.GetProducts();
  }
}
