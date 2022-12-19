import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientModel } from '../model/Client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(private http:HttpClient) { }
  getClientsData(){
    return this.http.get('http://127.0.0.1:3000/clients');
  }

  addClient(data:ClientModel): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.post('http://127.0.0.1:3000/Addclient',data,{headers: headers,});
    };

    deleteClient(id:any){
      return this.http.delete('http://127.0.0.1:3000/Deleteclient/'+id);
    }

    updateClient(id:any,data:ClientModel){
      const headers = new HttpHeaders();
      return this.http.put('http://127.0.0.1:3000/Updateclient/'+id,data,{headers: headers,});
    }
}
