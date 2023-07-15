import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-chef',
  templateUrl: './display-chef.component.html',
  styleUrls: ['./display-chef.component.css']
})
export class DisplayChefComponent implements OnInit {
  id: any;
  users : any ;
  chef : any ;
  constructor(private activatedRoute :ActivatedRoute) { }

  ngOnInit(): void {
    {
      this.id= this.activatedRoute.snapshot.paramMap.get('id');
      console.log("id" , this.id);
      this.users= JSON.parse(localStorage.getItem('Users')|| '[]');
      for (let i = 0; i < this.users.length; i++) {
        if(this.users[i].id == this.id){
          this.chef = this.users[i];
        }
        
      }
      console.log('my chef' , this.chef);
  
    }
  }

}
