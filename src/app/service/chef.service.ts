import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChefService {
  chefURL:string ='http://localhost:3000/chefs';

  constructor(private httpClient : HttpClient) { }

  getAllChefs(){
    return this.httpClient.get(this.chefURL)
  }
  getChefbyId(id : any){
    return this.httpClient.get(`${this.chefURL}/${id}`);
  }
  addChef(chef:any){
    return this.httpClient.post(this.chefURL , chef);
  }
  editchef(chef:any){
    return this.httpClient.put(`${this.chefURL}/${chef.id}`,chef);
  }
  deleteChef(id:any){
    return this.httpClient.delete(`${this.chefURL}/${id}`);
  }
}
