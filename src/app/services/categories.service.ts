import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CategoriesModel } from '../model/Categorie.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  getCategoryData() {
    return this.http.get('http://127.0.0.1:3000/categories');
  }
  addCat(data: CategoriesModel): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.post('http://127.0.0.1:3000/addcategorie', data, {
      headers: headers,
    });
  }

  getCategorieById(id: any) {
    const headers = new HttpHeaders();
    return this.http.get('http://127.0.0.1:3000/categorie/' + id, {
      headers: headers,
    });
  }

  updateCategory(id: any, data: CategoriesModel) {
    const headers = new HttpHeaders();
    return this.http.put('http://127.0.0.1:3000/Updatecategorie/' + id, data, {
      headers: headers,
    });
  }
}
