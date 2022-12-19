import {
  ChangeDetectorRef,
  Component,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { CategorieCompositionModel } from '../model/CategorieComposition.model';
import { CategocompoService } from '../services/categocompo.service';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-categoriecomposition',
  templateUrl: './categoriecomposition.component.html',
  styleUrls: ['./categoriecomposition.component.css'],
})
export class CategoriecompositionComponent implements OnInit {
  Compocat: any;
  Products: any;
  catc: any;
  prod: any;
  Comcat = new CategorieCompositionModel();
  Page: number = 1;
  Count: number = 0;
  TableSize: number = 5;
  TableSizes: any = [5, 10, 15, 20];
  response: any;
  constructor(
    private modalService: NgbModal,
    private Compocategorieservices: CategocompoService,
    private productservice: ProduitService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    setInterval(() => {
      this.GetCompoCat();
      this.changeDetector.detectChanges();
    }, 1000);
    this.GetProducts();
    this.Comcat.Affichage = 'Desactivé';
    this.Comcat.CatgorieCompo = 'exemple';
  }

  GetCompoCat() {
    this.Compocategorieservices.getCategoriesCompoData().subscribe((res) => {
      this.Compocat = res;
    });
  }

  getidCat(event: any) {
    this.catc = event.target.value;
    this.Comcat.idprod = this.catc;
    this.productservice.getproductbyid(this.catc).subscribe((res) => {
      this.prod = res;
      this.Comcat.Product = this.prod[0].ProductName;
    });
  }

  AddCompoCat() {
    this.Compocategorieservices.AddCategorieCompo(this.Comcat).subscribe(
      (res) => {
        this.response = res;
        this.GetCompoCat();
        if (this.response.message == 'Category composition created succefully') {
          Swal.fire({
            position: 'top-end',
            title: 'Catégorie compositon ajoutée',
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
      }
    );
  }

  UpdateCategoriecomposition(catco: CategorieCompositionModel) {
    this.Compocategorieservices.updateCatcompo(catco.id, catco).subscribe(
      (res) => {
        this.response = res;
        this.GetCompoCat();
        if (this.response.message == 'Category composition updated succefully') {
          Swal.fire({
            position: 'top-end',
            title: 'Catégorie compositon modifiée',
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
      }
    );
  }

  GetProducts() {
    this.productservice.getProductsData().subscribe((res) => {
      this.Products = res;
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
    this.GetCompoCat();
  }

  OnTableSizechange(event: any) {
    this.TableSize = event.target.value;
    this.Page = 1;
    this.GetCompoCat();
  }
}
