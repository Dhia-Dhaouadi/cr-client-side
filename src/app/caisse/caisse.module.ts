import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaisseRoutingModule } from './caisse-routing.module';
import { CaisseComponent } from './caisse.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [
    CaisseComponent,

  ],
  imports: [
    CommonModule,
    CaisseRoutingModule,
    NgbModule,
    NgxDatatableModule,
  ]
})
export class CaisseModule { }
