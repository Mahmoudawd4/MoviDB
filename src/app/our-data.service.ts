import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OurDataService {

  constructor() {

   }
   getEmps(){
    return [
      
      {name:'ahemd' ,age:23 , gender:'male' , dateOffBirth:'1/6/1997' ,salary:2334344 },
      {name:'mohamed' ,age:23 , gender:'male' , dateOffBirth:'1/6/1997' ,salary:2334344 },
      {name:'mahmoud' ,age:23 , gender:'male' , dateOffBirth:'1/6/1997' ,salary:2334344 },
      {name:'taha' ,age:23 , gender:'male' , dateOffBirth:'1/6/1997' ,salary:2334344 },
      {name:'khaled' ,age:23 , gender:'male' , dateOffBirth:'1/6/1997' ,salary:2334344 },
      {name:'aly' ,age:23 , gender:'male' , dateOffBirth:'1/6/1997' ,salary:2334344 },
      {name:'hamza' ,age:23 , gender:'male' , dateOffBirth:'1/6/1997' ,salary:2334344 },

    ]

  }
}
