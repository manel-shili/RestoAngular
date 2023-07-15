import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-chef',
  templateUrl: './dashboard-chef.component.html',
  styleUrls: ['./dashboard-chef.component.css']
})
export class DashboardChefComponent implements OnInit {
  connectedUser:any;
  plats:any;
  plat:any =[];

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.plats=JSON.parse(localStorage.getItem('plats')|| '[]');
    this.connectedUser=JSON.parse(localStorage.getItem('connectedUser')|| '1');
    for (let i = 0; i < this.plats.length; i++) {
      if(this.connectedUser.id == this.plats[i].idChef){
        this.plat.push(this.plats[i]);
        
       
      }
}

}
editPlat(id : any){
  this.router.navigate([`editPlat${id}`]);
  console.log('my id from edit' , id);
}



}
