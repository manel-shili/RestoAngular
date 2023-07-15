import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-admin',
  templateUrl: './display-admin.component.html',
  styleUrls: ['./display-admin.component.css']
})
export class DisplayAdminComponent implements OnInit {
  id: any;
  users : any ;
  admin : any ;
  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.id= this.activatedRoute.snapshot.paramMap.get('id');
    console.log("id" , this.id);
    this.users= JSON.parse(localStorage.getItem('Users')|| '[]');
    for (let i = 0; i < this.users.length; i++) {
      if(this.users[i].id == this.id){
        this.admin = this.users[i];
      }
      
    }
    console.log('my admin' , this.admin);

  }
  }


