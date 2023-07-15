import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatService {
  platURL:string ='http://localhost:3000';

  constructor(private httpClient : HttpClient) { }

  getAllPlats(){
    return this.httpClient.get(this.platURL)
  }
  getPlatbyId(id : any){
    return this.httpClient.get(`${this.platURL}/${id}`);
  }
  addPlat(plat:any){
    return this.httpClient.post(this.platURL , plat);
  }
  editPlat(plat:any){
    return this.httpClient.put(`${this.platURL}/${plat.id}`,plat);
  }
  deletePlat(id:any){
    return this.httpClient.delete(`${this.platURL}/${id}`);
  }
  searchPlat(platName:any){
    return this.httpClient.get(`${this.platURL}/${platName}`);
  }


}

