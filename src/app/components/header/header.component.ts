import { Component, OnInit } from '@angular/core';
import { connected } from 'process';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  connectedUser : any;
  connected : any = false;
  admin : any = false;
  chef : any = false;
  user : any = false;

  constructor() { } //1

  ngOnInit(): void { //2
    // this.connectedUser = JSON.parse(localStorage.getItem('connectedUser'));
    // if(this.connectedUser){
    //   this.connected = true;
    // }
    // console.log(this.connected);
    // if(this.connectedUser.role=='admin'){
    //   this.admin=true;
    
    // }else if(this.connectedUser.role=='chef'){
    //   this.chef = true;
    // }else if(this.connectedUser.role=='user'){
    //   this.user=true;
    // }
  }
  
  logout(){
    if(this.connected == true){
      localStorage.removeItem('connectedUser');
    }
  }
  

}
