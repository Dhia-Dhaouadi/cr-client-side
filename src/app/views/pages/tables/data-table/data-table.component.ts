import { Component, OnInit } from '@angular/core';

import { DataTable } from "simple-datatables";
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
products:any;
  constructor(private productservice:ProduitService) { }

  ngOnInit(): void {
    const dataTable = new DataTable("#dataTableExample");
    this.productservice.getProductsData().subscribe(res=>{
      this.products=res;
      console.log(this.products);
    });
  }

}
