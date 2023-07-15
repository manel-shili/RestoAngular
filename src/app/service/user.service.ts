import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURL:string ='http://localhost:3000';
  constructor(private httpClient : HttpClient) { }

  getAllUsers(){
    return this.httpClient.get(this.userURL)
  }
  getUserbyId(id : any){
    return this.httpClient.get(`${this.userURL}/${id}`);
  }
  addUser(user:any){
    return this.httpClient.post(this.userURL, user);
  }
  editUser(user:any){
    return this.httpClient.put(`${this.userURL}/${user.id}`,user);
  }
  deleteUser(id:any){
    return this.httpClient.delete(`${this.userURL}/${id}`);
  }
}
