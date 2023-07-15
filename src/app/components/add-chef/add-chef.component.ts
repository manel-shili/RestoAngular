import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-chef',
  templateUrl: './add-chef.component.html',
  styleUrls: ['./add-chef.component.css']
})
export class AddChefComponent implements OnInit {
  addChefForm: FormGroup;
  id : any;
  title : any;
  users: any;
  user : any;
  constructor(private fb:FormBuilder , private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   
    this.addChefForm=this.fb.group({
      fname:[''],
      lname:[''],
      speciality : [''],
      experience : [''],
      email:[''],
      pwd:[''],
      cpwd:[''],
      phone:['']
    });

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('my id is' , this.id);
    if(this.id){
      //edit
      this.title = "Edit";
      this.users=JSON.parse(localStorage.getItem('Users')|| '[]');
      for (let i = 0; i < this.users.length; i++) {
        if(this.users[i].id== this.id){
          this.user = this.users[i];
        }
      }
        console.log('my object is' , this.user)
    } else{
      //chef
      this.title = "Add";
    }


  }
  addChef(chefs:any){
    //edit
    if (this.id){
      for (let i = 0; i < this.users.length; i++) {
        if(this.users[i].id == this.id){
          this.users[i].fname = chefs.fname;
          this.users[i].lname = chefs.lname;
          this.users[i].email = chefs.email;
          this.users[i].pwd = chefs.pwd;
          this.users[i].cpwd = chefs.cpwd;
          this.users[i].phone = chefs.phone;
          this.users[i].experience = chefs.experience;
          this.users[i].speciality = chefs.speciality;
        } 
      }
      localStorage.setItem('Users', JSON.stringify(this.users))
    }else{
    let users=JSON.parse(localStorage.getItem('Users')|| '[]');
    let idUser=JSON.parse(localStorage.getItem('idUser')|| '1');
    let connectedUser=JSON.parse(localStorage.getItem('connectedUser')|| '1');
    if(connectedUser.role==='admin'){
    chefs.id=idUser;
    chefs.role='chef';
    chefs.idAdmin=connectedUser.id;
    users.push(chefs);
    
    localStorage.setItem('idUser', idUser+1);
    localStorage.setItem('Users',JSON.stringify(users));
    }
  else{
    alert('it is not admin')
  }

    alert('bt clicked');
    console.log('my object is', this.addChefForm.value)
  }
  
  }
}
