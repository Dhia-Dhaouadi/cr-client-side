import {
  ChangeDetectorRef,
  Component,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { CompositionModel } from '../model/Composition.model';
import { CategocompoService } from '../services/categocompo.service';
import { CompositionService } from '../services/composition.service';

@Component({
  selector: 'app-composition-produit',
  templateUrl: './composition-produit.component.html',
  styleUrls: ['./composition-produit.component.css'],
})
export class CompositionProduitComponent implements OnInit {
  Compocat: any;
  cm: any;
  composition: any;
  compos: any;
  Composition = new CompositionModel();
  Page: number = 1;
  Count: number = 0;
  TableSize: number = 5;
  TableSizes: any = [5, 10, 15, 20];
  response: any;
  constructor(
    private modalService: NgbModal,
    private Compocategorieservices: CategocompoService,
    private compositionservice: CompositionService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    setInterval(() => {
      this.GetCompositions();
      this.changeDetector.detectChanges();
    }, 1000);
    this.GetCompoCat();
    this.Composition.CompositionName = 'exemple';
    this.Composition.AffichageCuisine = 'exemple cuisine';
    this.Composition.Affichage = 'Desactivé';
  }

  GetCompoCat() {
    this.Compocategorieservices.getCategoriesCompoData().subscribe((res) => {
      this.Compocat = res;
    });
  }

  getidcompo(event: any) {
    this.cm = event.target.value;
    this.Composition.idCat = this.cm;
    this.Compocategorieservices.getCatcompById(this.cm).subscribe((res) => {
      this.compos = res;
      this.Composition.Produit = this.compos[0].Product;
      this.Composition.CategorieCompos = this.compos[0].CatgorieCompo;
    });
  }

  Addcompostion() {
    this.compositionservice
      .addComposition(this.Composition)
      .subscribe((res) => {
        this.response = res;
        this.GetCompositions();
        if (this.response.message == 'Composition created succefully') {
          Swal.fire({
            position: 'top-end',
            title: 'Composition ajoutée',
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

  updateComposition(compo: CompositionModel) {
    this.compositionservice
      .updateComposition(compo.id, compo)
      .subscribe((res) => {
        this.response = res;
        this.GetCompositions();
        if (this.response.message == 'Composition update succefully') {
          Swal.fire({
            position: 'top-end',
            title: 'Compositon modifiée',
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

  GetCompositions() {
    this.compositionservice.getCompositionsData().subscribe((res) => {
      this.composition = res;
    });
  }

  deleteComposition(id: any) {
    this.compositionservice.deleteComposition(id).subscribe((res) => {
      this.GetCompositions();
      Swal.fire({
        position: 'top-end',
        title: 'Composition supprimée',
        text: '',
        showConfirmButton: false,
        timer: 1500,
        icon: 'success',
      });
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
    this.GetCompositions();
  }

  OnTableSizechange(event: any) {
    this.TableSize = event.target.value;
    this.Page = 1;
    this.GetCompositions();
  }
}
