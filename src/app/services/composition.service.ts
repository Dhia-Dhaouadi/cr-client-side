import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompositionModel } from '../model/Composition.model';

@Injectable({
  providedIn: 'root'
})
export class CompositionService {

  constructor(private http: HttpClient) { }

  getCompositionsData() {
    return this.http.get('http://127.0.0.1:3000/compositions');
  }

  addComposition(data:CompositionModel) {
    const headers = new HttpHeaders();
    return this.http.post('http://127.0.0.1:3000/Addcompositions',data, {
      headers: headers,
    });
  }

  getCompositionbyid(id: any) {
    const headers = new HttpHeaders();
    return this.http.get('http://127.0.0.1:3000/Composition/' + id, {
      headers: headers,
    });
  }

  updateComposition(id:any,data:CompositionModel){
    const headers = new HttpHeaders();
    return this.http.put('http://127.0.0.1:3000/Updatecomposition/' + id,data, {
      headers: headers,
    });
  }

  deleteComposition(id:any){
    return this.http.delete('http://127.0.0.1:3000/Deletecomposition/'+id)
  }
}
