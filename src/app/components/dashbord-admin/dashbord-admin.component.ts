import { CompileMetadataResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-dashbord-admin',
  templateUrl: './dashbord-admin.component.html',
  styleUrls: ['./dashbord-admin.component.css']
})
export class DashbordAdminComponent implements OnInit {

  users:any;
  chefs:any =[];
  admins:any=[];
  clients:any=[];
  myDate : Date ; 

  constructor(private router : Router , private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getAllAdmins().subscribe(
      (data)=>{
        this.admins=data
      }
    );
    
   // this.myDate = new Date () ;
    //affecter au niveau du tableau user deux objets 
    // le premier objet John et le deuxieme Marc
  //   this.users=[{
  //     fname:'John',
  //     lname:'Dupont',
  //     email: 'test@test.com',
  //     pwd:'1234',
  //     cpwd:'1234',
  //     phone:'21548796'}, 
  //     {
  //       fname:'Marc',
  //       lname:'Bernand',
  //       email: 'test1@test.com',
  //       pwd:'1234',
  //       cpwd:'1234',
  //       phone:'23568974'}
  //   ]
  //   this.chefs=[{
  //     fname:'John',
  //     lname:'Dupont',
  //     speciality:'française',
  //     experience:'6ans',
  //     email: 'chef1@test.com',
  //     pwd:'1234',
  //     cpwd:'1234',
  //     phone:'21254876'
      
  //   },
  //   {
  //   fname:'Francesco',
  //   lname:'Pittore',
  //   speciality:'italienne',
  //   experience:'7ans',
  //   email: 'chef@test.com',
  //   pwd:'1234',
  //   cpwd:'1234',
  //   phone:'23334796'}]
  //   this.plats=[{
      
  //     platName:'Cuscus',
  //     description:'salé',
  //     price:'15 DT'
  //   },
  //   {
      
  //     platName:'spaghetti',
  //     description:'salé',
  //     price:'20 DT'
  //   }]
  // }
//this.users=JSON.parse(localStorage.getItem('Users') || '[]');
//for (let i = 0; i < this.users.length; i++) {
//  if(this.users[i].role=="admin"){
//    this.admins.push(this.users[i]);
//  }
//  else if(this.users[i].role=="chef"){
 //   this.chefs.push(this.users[i]);
 // }else if(this.users[i].role=="user"){
//    this.clients.push(this.users[i]);
//  }
//  }
//
}
displayUser(id:any){
  this.router.navigate([`displayUser/${id}`]);

}
displayAdmin(id:any){
  this.router.navigate([`displayAdmin/${id}`]);
}
displayChef(id:any){
  this.router.navigate([`displayChef/${id}`]);
}
deleteUser(id:any){
  let pos;
  for (let i = 0; i < this.users.length; i++) {
      if(this.users[i].id == id){
        pos = i;
      }
  }
  this.users.splice(pos,1);
  localStorage.setItem('users' , JSON.stringify(this.users));
}
editAdmin(id : any){
  this.router.navigate([`editAdmin/${id}`]);
  console.log('my id from edit' , id);
}
editChef(id : any){
  this.router.navigate([`editChef/${id}`]);
  console.log('my id from edit' , id);
}
compare(experience){
  if(experience <= 5){
    return ['green' , '20px' , 'low'];
  }
  else{
    return ['red' , '40px' , 'good'];
  }
}
  }



