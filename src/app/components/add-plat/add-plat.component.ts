import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.css']
})
export class AddPlatComponent implements OnInit {
  addPlatForm:FormGroup;
  plat : any ={};
  id : any;
  title : any;
  
  constructor(private formBuilder: FormBuilder , private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.addPlatForm=this.formBuilder.group({
      platName:[''],
      description:[''],
      price: ['']
    })

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('my id is' , this.id);
    if(this.id){
      //edit
      this.title = "Edit";
    } else{
      //plat
      this.title = "Add";
    }
    

  }
  addPlat(){
    let plats=JSON.parse(localStorage.getItem('plats')|| '[]');
    let idPlat=JSON.parse(localStorage.getItem('idPlat')|| '1');
    let connectedUser=JSON.parse(localStorage.getItem('connectedUser')|| '1');
    if(connectedUser.role==='chef'){
    this.plat.idChef= connectedUser.id;//nchouf m3ah kol chef zadah
    this.plat.id=idPlat;
    plats.push(this.plat);
    localStorage.setItem('idPlat', idPlat +1);
    localStorage.setItem('plats',JSON.stringify(plats));
    }
    else{
      alert('it is not chef');
    }
    alert('btn clicked');
    console.log('here my object ', this.plat);
  }
}
