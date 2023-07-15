import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  addAdminForm: FormGroup;
  id : any;
  title : any;
  user : any;
  users : any;
  admin : any;
  constructor(private fb:FormBuilder ,private adminService:AdminService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.addAdminForm =  this.fb.group({
      fname:[''],
      lname:[''],
      email:[''],
      pwd:[''],
      cpwd:[''],
      phone:['']
    });

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('my id is' , this.id);
    if(this.id){
      //edit
      this.adminService.getAdminbyId(this.id).subscribe(
        (data)=>{
          console.log('mon objet',data);
          this.admin=data;
          console.log('my admin:',this.admin);
        }
      )
      this.title = "Edit";
      // this.users=JSON.parse(localStorage.getItem('Users')|| '[]');
      // for (let i = 0; i < this.users.length; i++) {
      //   if(this.users[i].id== this.id){
      //     this.user = this.users[i];
      //   }
      // }
        //console.log('my object is' , this.user)
      
    } else{
      //admin
      this.title = "Add";
    }
   


  }
  addAdmin(admins:any){
    //edit
    if (this.id){
      console.log(this.id)
      console.log(this.admin)
      this.adminService.editAdmin(this.admin).subscribe(
        ()=>{
          console.log('edit with succss');
        }
      )
     // for (let i = 0; i < this.users.length; i++) {
       // if(this.users[i].id == this.id){
       //   this.users[i].fname = admins.fname;
       //   this.users[i].lname = admins.lname;
        //  this.users[i].email = admins.email;
        //  this.users[i].pwd = admins.pwd;
        //  this.users[i].cpwd = admins.cpwd;
        //  this.users[i].phone = admins.phone;
      //  } 
     // }
     // localStorage.setItem('Users', JSON.stringify(this.users))
      
    }else{
      this.adminService.addAdmin(admins).subscribe(
        ()=>{
          console.log('add with success')
        }
      )

      //add
     // let users=JSON.parse(localStorage.getItem('Users')|| '[]');
     // let idUser=JSON.parse(localStorage.getItem('idUser')|| '1');
     // admins.id=idUser;
     // admins.role='admin';
     // users.push(admins);
     // localStorage.setItem('idUser', idUser+1);
     // localStorage.setItem('Users',JSON.stringify(users));
     // alert('bt clicked');
     // console.log('my object is', this.addAdminForm.value)
    }
  
    }
   
}
