import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  AdminURL:string ='http://localhost:3000';
  // AdminURL: string = "http://localhost:8080/api/";
  constructor(private httpClient : HttpClient) { }

  getAllAdmins(){
    return this.httpClient.get(this.AdminURL+'/admins')
  }
  getAdminbyId(id : any){
    return this.httpClient.get(`${this.AdminURL+'/admins'}/${id}`);
  }
  addAdmin(admin:any){
    return this.httpClient.post(this.AdminURL+'/addAdmin', admin);
  }
  editAdmin(admin:any){
    return this.httpClient.put(`${this.AdminURL+'/admins'}/${admin.id}`,admin);
  }
  deleteAdmin(id:any){
    return this.httpClient.delete(`${this.AdminURL+'/admins'}/${id}`);
  }
}
