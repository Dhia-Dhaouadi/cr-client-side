import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {UsersModel} from '../model/Users.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getUsersData(){
    return this.http.get('http://127.0.0.1:3000/users');
  }

  addUser(data:UsersModel){
    return this.http.post('http://127.0.0.1:3000/createusers',data);
    };

    deleteUser(id:any){
      return this.http.delete('http://127.0.0.1:3000/Deleteuser/'+id);
    }

    updateUser(id:any,data:UsersModel){
      const headers = new HttpHeaders();
      return this.http.put('http://127.0.0.1:3000/Updateuser/'+id,data,{headers: headers,});
    }
}
