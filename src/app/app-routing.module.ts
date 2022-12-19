import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './views/layout/base/base.component';
import { AuthGuard } from './core/guard/auth.guard';
import { ErrorPageComponent } from './views/pages/error-page/error-page.component';
import { CuisinePComponent } from './cuisine-p/cuisine-p.component';
import { ClientComponent } from './client/client.component';
import { CaissierComponent } from './caissier/caissier.component';
import { LivreurComponent } from './livreur/livreur.component';
import { RechercheClientCaisseComponent } from './recherche-client-caisse/recherche-client-caisse.component';
import { CommandeEnfaceEmporterComponent } from './commande-enface-emporter/commande-enface-emporter.component';
import { CommandeEnfaceSurplaceComponent } from './commande-enface-surplace/commande-enface-surplace.component';
import { CommandeTelephoneEmporterComponent } from './commande-telephone-emporter/commande-telephone-emporter.component';
import { CommandeTelephoneSurplaceComponent } from './commande-telephone-surplace/commande-telephone-surplace.component';
import { CommandeTelephoneLivraisonComponent } from './commande-telephone-livraison/commande-telephone-livraison.component';
import { AdduserComponent } from './adduser/adduser.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ProduitComponent } from './produit/produit.component';
import { CompositionProduitComponent } from './composition-produit/composition-produit.component';
import { CommandesUbereatComponent } from './commandes-ubereat/commandes-ubereat.component';
import { FideliteComponent } from './fidelite/fidelite.component';
import { CaisseboardComponent } from './caisseboard/caisseboard.component';
import { PointageComponent } from './pointage/pointage.component';
import { ClientfideleComponent } from './clientfidele/clientfidele.component';
import { OffreComponent } from './offre/offre.component';
import { CuisinierComponent } from './cuisinier/cuisinier.component';
import { CategoriecompositionComponent } from './categoriecomposition/categoriecomposition.component';
import { CuisineSComponent } from './cuisine-s/cuisine-s.component';
import { AddclientComponent } from './addclient/addclient.component';
import { CuisineComponent } from './cuisine/cuisine.component';
import { HasRoleGuard } from './core/Role/Role.guard';
import { InvoiceComponent } from './invoice/invoice.component';




const routes: Routes = [
  { path:'auth', loadChildren: () => import('./views/pages/auth/auth.module').then(m => m.AuthModule) },
  {
    path: '',
    component: BaseComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'Administrateur',
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'apps',
        loadChildren: () => import('./views/pages/apps/apps.module').then(m => m.AppsModule)
      },
      {
        path: 'ui-components',
        loadChildren: () => import('./views/pages/ui-components/ui-components.module').then(m => m.UiComponentsModule)
      },
      {
        path: 'advanced-ui',
        loadChildren: () => import('./views/pages/advanced-ui/advanced-ui.module').then(m => m.AdvancedUiModule)
      },
      {
        path: 'form-elements',
        loadChildren: () => import('./views/pages/form-elements/form-elements.module').then(m => m.FormElementsModule)
      },
      {
        path: 'advanced-form-elements',
        loadChildren: () => import('./views/pages/advanced-form-elements/advanced-form-elements.module').then(m => m.AdvancedFormElementsModule)
      },
      {
        path: 'charts-graphs',
        loadChildren: () => import('./views/pages/charts-graphs/charts-graphs.module').then(m => m.ChartsGraphsModule)
      },
      {
        path: 'tables',
        loadChildren: () => import('./views/pages/tables/tables.module').then(m => m.TablesModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/pages/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path:"AddClient",
        component:AddclientComponent
      },
      {
        path:"Client",
        component:ClientComponent
      },
      {
        path:"Client fidele",
        component:ClientfideleComponent
      },
      {
        path:"Pointage",
        component:PointageComponent
      },
      {
        path:"Caissier",
        component:CaissierComponent
      },
      {
        path:"Livreur",
        component:LivreurComponent
      },
      {
        path:"AddUser",
        component:AdduserComponent
      },
      {
        path:"Enface/Commande/Emporter",
        component:CommandeEnfaceEmporterComponent
      },
      {
        path:"Enface/Commande/Surplace",
        component:CommandeEnfaceSurplaceComponent
      },
      {
        path:"Telephone/Commande/Emporter",
        component:CommandeTelephoneEmporterComponent
      },
      {
        path:"Telephone/Commande/Surplace",
        component:CommandeTelephoneSurplaceComponent
      },
      {
        path:"CommandeUbereat",
        component:CommandesUbereatComponent
      },
      {
        path:"Telephone/Commande/Livraison",
        component:CommandeTelephoneLivraisonComponent
      },
      {
        path:"Produit/Categorie",
        component:CategorieComponent
      },
      {
        path:"Produit",
        component:ProduitComponent
      },
      {
        path:"Produit/Composition",
        component:CompositionProduitComponent
      },
      {
        path:"Produit/CategorieComposition",
        component:CategoriecompositionComponent
      },
      {
        path:"Offre",
        component:OffreComponent
      },
      {
        path:"Cuisinier",
        component:CuisinierComponent
      },
      {
        path:"Exemple commande",
        component:InvoiceComponent
      },
      {
        path: 'general',
        loadChildren: () => import('./views/pages/general/general.module').then(m => m.GeneralModule)
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      // { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  {
    canActivate: [AuthGuard],
    path: 'error',
    component: ErrorPageComponent,
    data: {
      'type': 404,
      'title': 'Page Not Found',
      'desc': 'Oopps!! The page you were looking for doesn\'t exist.'
    }
  },
  {
    canActivate: [AuthGuard],
    path: 'Caisse',
    data: {
      role: 'Caissier',
    },
    loadChildren: () => import('./caisse/caisse.module').then(m => m.CaisseModule)
  },
  {

    canActivate: [AuthGuard],
    path:"recherche-client-caisse",
    component:RechercheClientCaisseComponent,
    data: {
      role: 'Caissier',
    },
  },
  {
    canActivate: [AuthGuard],
    path:"Cuisine",
    component:CuisineComponent,
    data: {
      role: 'Cuisinier',
    },
  },
  {
    canActivate: [AuthGuard],
    path:"CuisineP",
    component:CuisinePComponent,
    data: {
      role: 'Cuisinier',
    },
  },
  {
    canActivate: [AuthGuard],
    path:"CuisinieS",
    component:CuisineSComponent,
    data: {
      role: 'Cuisinier',
    },
  },
  {
    canActivate: [AuthGuard],
    path:"Fidelite",
    component:FideliteComponent,
    data: {
      role: 'Caissier',
    },
  },
  {
    canActivate: [AuthGuard],
    path:"Caissee/:type/:typee",
    component:CaisseboardComponent,
    data: {
      role: 'Caissier,Administrateur',
    },
  },
  {
    canActivate: [AuthGuard],
    path: 'error/:type',
    component: ErrorPageComponent
  },
  { path: '**', redirectTo: 'error', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
