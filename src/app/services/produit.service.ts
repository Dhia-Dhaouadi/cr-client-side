import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsModel } from '../model/Product.model';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  constructor(private http: HttpClient) {}

  getProductsData() {
    return this.http.get('http://127.0.0.1:3000/products');
  }

  addProductsData(data: ProductsModel): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.post('http://127.0.0.1:3000/Addproduct', data, {
      headers: headers,
    });
  }

  getproductbyid(id: any) {
    const headers = new HttpHeaders();
    return this.http.get('http://127.0.0.1:3000/product/' + id, {
      headers: headers,
    });
  }

  updateProduct(id: any, data: ProductsModel) {
    const headers = new HttpHeaders();
    return this.http.put('http://127.0.0.1:3000/Updateproduct/' + id, data, {
      headers: headers,
    });
  }
}
