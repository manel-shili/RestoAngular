import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from "../confirmPwd";

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  signupForm: FormGroup;
  title: string;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.title = "signup";
    this.signupForm=this.fb.group({
      fname:['', [Validators.required, Validators.minLength(4)]],
      lname:['' , [Validators.required, Validators.minLength(4)]],
      email:['' , [Validators.required, Validators.email]],
      pwd:['' ],
      cpwd:['' ],
      phone:['' ]
    },
    {
      validator : MustMatch ('pwd' , 'cpwd')

    }
    );

  }
  signup(c:any){
    let users=JSON.parse(localStorage.getItem('Users')|| '[]');
    let idUser=JSON.parse(localStorage.getItem('idUser')|| '1');
    c.id=idUser;
    c.role='user';
    users.push(c);
    localStorage.setItem('idUser', idUser+1);
    localStorage.setItem('Users',JSON.stringify(users));
    alert('bt clicked');
    console.log('my object is', this.signupForm.value)
  }
}
