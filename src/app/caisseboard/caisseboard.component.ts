import { ChangeDetectorRef, Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../services/client.service';
import { ClientModel } from '../model/Client.model';
import { CategoriesService } from '../services/categories.service';
import { ProduitService } from '../services/produit.service';
import { CategocompoService } from '../services/categocompo.service';
import { CompositionService } from '../services/composition.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-caisseboard',
  templateUrl: './caisseboard.component.html',
  styleUrls: ['./caisseboard.component.css']
})
export class CaisseboardComponent implements OnInit {
  type: any;
  typee: any;
  icon:any;
  icon1:any;
  items:any;
  change:any;
  linkc:any;
  iconc:any;
  client = new ClientModel();
  Categories: any;
  Products: any;
  Compocat: any;
  compositions:any;
  constructor(private modalService: NgbModal,private route: ActivatedRoute,private clientservice:ClientService,
    private categorieservice: CategoriesService,
    private productservice: ProduitService,
    private Compocategorieservices: CategocompoService,
    private compositionservice: CompositionService,
    private changeDetector: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.client.NomClient="Entrer Nom"
    this.client.PrenomClient="Entrer Prénom"
    this.client.Civilite="M"
    this.client.Societe="Entrer societe"
    this.client.Telephone=0
    this.client.Email="exemple@gmail.com";
    this.client.DateNaissance="2022-11-11"
    this.client.Adresse="Entrer Adresse"
    this.client.Ville="Entrer Ville"
    this.client.Etage=0
    this.client.Code1=0
    this.client.Code2=0
    this.client.Code3=0
    this.client.Sonette="Entrer sonette"
    this.client.CodePostal="Entrer code postal"
    this.client.NbrComa=0
    this.client.Montantfidilite=0
    this.client.Commentaire="Entrer commentaire"
    this.client.Batiment="N batiment"
    this.client.Codebarre="0"
    this.type = this.route.snapshot.paramMap.get('type');
    this.typee = this.route.snapshot.paramMap.get('typee');
    if ((this.type=="En face")&&(this.typee=="Emporter")){
      this.icon="feather icon-user-check";
      this.icon1="feather icon-shopping-bag";
      this.change="Téléphone";
      this.iconc="feather icon-phone-call";
      this.linkc="/Caissee/Téléphone/Emporter";
      this.items=[
        {
          title:"Emporter",
          link:"/Caissee/En face/Emporter",
          icon:"feather icon-shopping-bag",
        },
        {
          title:"Sur place",
          link:"/Caissee/En face/Sur place",
          icon:"mdi mdi-silverware-variant"
        }
      ]

    }
    else if ((this.type=="En face")&&(this.typee=="Sur place")){
      this.icon="feather icon-user-check";
      this.icon1="mdi mdi-silverware-variant";
      this.change="Téléphone";
      this.iconc="feather icon-phone-call";
      this.linkc="/Caissee/Téléphone/Emporter";
      this.items=[
        {
          title:"Emporter",
          link:"/Caissee/En face/Emporter",
          icon:"feather icon-shopping-bag",
        },
        {
          title:"Sur place",
          link:"/Caissee/En face/Sur place",
          icon:"mdi mdi-silverware-variant"
        }
      ]

    }
    else if ((this.type=="Téléphone")&&(this.typee=="Emporter")){
      this.icon="feather icon-phone-call";
      this.icon1="feather icon-shopping-bag";
      this.change="En face";
      this.iconc="feather icon-user-check";
      this.linkc="/Caissee/En face/Emporter";
      this.items=[
        {
          title:"Emporter",
          link:"/Caissee/Téléphone/Emporter",
          icon:"feather icon-shopping-bag",
        },
        {
          title:"Livraison",
          link:"/Caissee/Téléphone/Livraison",
          icon:"mdi mdi-motorbike",
        },
        {
          title:"Sur place",
          link:"/Caissee/Téléphone/Sur place",
          icon:"mdi mdi-silverware-variant"
        }
      ]
    }
    else if ((this.type=="Téléphone")&&(this.typee=="Sur place")){
      this.icon="feather icon-phone-call";
      this.icon1="mdi mdi-silverware-variant";
      this.change="En face";
      this.iconc="feather icon-user-check";
      this.linkc="/Caissee/En face/Emporter";
      this.items=[
        {
          title:"Emporter",
          link:"/Caissee/Téléphone/Emporter",
          icon:"feather icon-shopping-bag",
        },
        {
          title:"Livraison",
          link:"/Caissee/Téléphone/Livraison",
          icon:"mdi mdi-motorbike",
        },
        {
          title:"Sur place",
          link:"/Caissee/Téléphone/Sur place",
          icon:"mdi mdi-silverware-variant"
        }
      ]
    }
    else {
      this.icon="feather icon-phone-call";
      this.icon1="mdi mdi-motorbike";
      this.change="En face";
      this.iconc="feather icon-user-check";
      this.linkc="/Caissee/En face/Emporter";
      this.items=[
        {
          title:"Emporter",
          link:"/Caissee/Téléphone/Emporter",
          icon:"feather icon-shopping-bag",
        },
        {
          title:"Livraison",
          link:"/Caissee/Téléphone/Livraison",
          icon:"mdi mdi-motorbike",
        },
        {
          title:"Sur place",
          link:"/Caissee/Téléphone/Sur place",
          icon:"mdi mdi-silverware-variant"
        }
      ]
    }
   setInterval(() => {
    this.categorieservice.getCategoryData().subscribe((res) => {
      this.Categories = res;
      this.productservice.getProductsData().subscribe((res) => {
        this.Products = res;
        this.Compocategorieservices.getCategoriesCompoData().subscribe(
          (res) => {
            this.Compocat = res;
            this.compositionservice.getCompositionsData().subscribe(res=>{
              this.compositions=res;
            })
          }
        );
      });
    });
    this.changeDetector.detectChanges();},1000);
  }

  Addclient(){
    if (this.client.Montantfidilite > 500){
      this.client.type='fidèle';
    }
    else{
      this.client.type='';
    }
    this.clientservice.addClient(this.client).subscribe(res=>{
      window.location.reload();
    })
    Swal.fire({position: 'top-end', title: 'Client Ajouté', text: '', showConfirmButton: false, timer: 3000, icon: 'success'})
  }


  openXlModal(content: TemplateRef<any>) {
    this.modalService
      .open(content, { size: 'xl' })
      .result.then((result) => {
        console.log('Modal closed' + result);
      })
      .catch((res) => {});
  }

  openXlModal1(content: TemplateRef<any>): void {
    this.modalService
      .open(content, { size: 'xl' })
      .result.then((result) => {
        console.log('Modal closed' + result);
        window.location.reload();
      })
      .catch((res) => {});
  }
}
