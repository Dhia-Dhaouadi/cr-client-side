import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './views/layout/layout.module';
import { AuthGuard } from './core/guard/auth.guard';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './views/pages/error-page/error-page.component';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { CuisinePComponent } from './cuisine-p/cuisine-p.component';
import { CaissierComponent } from './caissier/caissier.component';
import { ClientComponent } from './client/client.component';
import { LivreurComponent } from './livreur/livreur.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RechercheClientCaisseComponent } from './recherche-client-caisse/recherche-client-caisse.component';
import { CommandeEnfaceEmporterComponent } from './commande-enface-emporter/commande-enface-emporter.component';
import { CommandeEnfaceSurplaceComponent } from './commande-enface-surplace/commande-enface-surplace.component';
import { CommandeTelephoneEmporterComponent } from './commande-telephone-emporter/commande-telephone-emporter.component';
import { CommandeTelephoneSurplaceComponent } from './commande-telephone-surplace/commande-telephone-surplace.component';
import { CommandeTelephoneLivraisonComponent } from './commande-telephone-livraison/commande-telephone-livraison.component';
import { AdduserComponent } from './adduser/adduser.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { CategorieComponent } from './categorie/categorie.component';
import { ProduitComponent } from './produit/produit.component';
import { CompositionProduitComponent } from './composition-produit/composition-produit.component';
import { NgxMaskModule } from 'ngx-mask';
import { FeatherIconModule } from './core/feather-icon/feather-icon.module';
import { QuillModule } from 'ngx-quill';
import { ArchwizardModule } from 'angular-archwizard';
import { CommandesUbereatComponent } from './commandes-ubereat/commandes-ubereat.component';
import { FideliteComponent } from './fidelite/fidelite.component';
import { CaisseboardComponent } from './caisseboard/caisseboard.component';
import { HttpClientModule } from '@angular/common/http';
import { PointageComponent } from './pointage/pointage.component';
import { ClientfideleComponent } from './clientfidele/clientfidele.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OffreComponent } from './offre/offre.component';
import { CuisinierComponent } from './cuisinier/cuisinier.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CategoriecompositionComponent } from './categoriecomposition/categoriecomposition.component';
import { CuisineSComponent } from './cuisine-s/cuisine-s.component';
import { AddclientComponent } from './addclient/addclient.component';
import { CuisineComponent } from './cuisine/cuisine.component';
import { InvoiceComponent } from './invoice/invoice.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    CuisinePComponent,
    CaissierComponent,
    ClientComponent,
    LivreurComponent,
    RechercheClientCaisseComponent,
    CommandeEnfaceEmporterComponent,
    CommandeEnfaceSurplaceComponent,
    CommandeTelephoneEmporterComponent,
    CommandeTelephoneSurplaceComponent,
    CommandeTelephoneLivraisonComponent,
    AdduserComponent,
    CategorieComponent,
    ProduitComponent,
    CompositionProduitComponent,
    CommandesUbereatComponent,
    FideliteComponent,
    CaisseboardComponent,
    PointageComponent,
    ClientfideleComponent,
    OffreComponent,
    CuisinierComponent,
    CategoriecompositionComponent,
    CuisineSComponent,
    AddclientComponent,
    CuisineComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
    HttpClientModule,
    NgxDatatableModule,
    NgxMaskModule.forRoot({ validation: true}), // Ngx-mask
    SweetAlert2Module.forRoot(),
    FeatherIconModule,
    QuillModule.forRoot(), // ngx-quill
    ArchwizardModule,
    NgxPaginationModule// angular-archwizard
  ],
  providers: [
    AuthGuard,
    {
      provide: HIGHLIGHT_OPTIONS, // https://www.npmjs.com/package/ngx-highlightjs
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          xml: () => import('highlight.js/lib/languages/xml'),
          typescript: () => import('highlight.js/lib/languages/typescript'),
          scss: () => import('highlight.js/lib/languages/scss'),
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
