import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  user : any ={};
  findedUser : any;
  constructor(private formBuilder: FormBuilder , private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:[''],
      pwd:['']
    })
  }
  login(){
    let users=JSON.parse(localStorage.getItem('Users')|| '[]');
    let connectedUser=JSON.parse(localStorage.getItem('connectedUser')|| '1');
    
    for (let i = 0; i < users.length; i++) {
      if(users[i].email== this.user.email && users[i].pwd== this.user.pwd){
        connectedUser = users[i];
        this.findedUser = users[i];
      }  
    }
     if (this.findedUser){
       switch (this.findedUser.role) {
         case 'user':
           this.router.navigate([""]); //['path'] 
           break;
           case 'chef':
           this.router.navigate(["add-chef"]);
           break;
           case 'admin':
            this.router.navigate(["add-admin"]);
            break;
       
         default:
           break;
       }
     }
    localStorage.setItem('connectedUser',JSON.stringify(connectedUser));
    alert('btn clicked');
    console.log('findedUser ', this.findedUser);
  }
}
