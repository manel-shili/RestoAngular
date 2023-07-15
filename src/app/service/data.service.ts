import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){

   let  admins =  [
    {  id:  1, fname:  'manel', lname: 'shili', email: 1, pwd:' 1', cpwd: 1,phone:1233 ,role:'admin' },
    {  id:  2,  fname:  'manel', lname: 'shili', email: 1, pwd: '2', cpwd: 1,phone: 1233,role:'admin' },
    {  id:  3,  fname:  'manel', lname: 'shili', email: 1, pwd: '3', cpwd:1,phone: 1233,role:'admin' },
    {  id:  4,  fname: ' manel', lname: 'shili', email: 1, pwd: 4, cpwd: 1,phone:1233 ,role:'admin' }
   ];

   return {admins};

  }
}
