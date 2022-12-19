import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CategorieCompositionModel } from '../model/CategorieComposition.model';

@Injectable({
  providedIn: 'root',
})
export class CategocompoService {
  constructor(private http: HttpClient) {}

  getCategoriesCompoData() {
    return this.http.get('http://127.0.0.1:3000/CategorieCompo');
  }

  AddCategorieCompo(data: CategorieCompositionModel) {
    const headers = new HttpHeaders();
    return this.http.post('http://127.0.0.1:3000/CategorieCompo', data, {
      headers: headers,
    });
  }

  getCatcompById(id:any){
    const headers = new HttpHeaders();
    return this.http.get('http://127.0.0.1:3000/CategorieCompo/'+id,{headers: headers,});
  }

  updateCatcompo(id:any,data:CategorieCompositionModel){
    const headers = new HttpHeaders();
    return this.http.put('http://127.0.0.1:3000/Updatecategorycompo/'+id,data,{headers: headers,});
  }
}
