import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
plats : any;
plat :any =[];
  constructor() { }

  ngOnInit(): void {
  }
searchPlat(){
  this.plats=JSON.parse(localStorage.getItem('plats') || '[]');
  for (let i = 0; i < this.plats.length; i++) {
    if(this.plats[i] == this.plat.platName){
      prompt( this.plats[i]);
    }
     
  }

}
}
