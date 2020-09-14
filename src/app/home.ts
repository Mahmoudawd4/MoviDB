import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeCalss {
  title = 'my-app1';
  userName:string ="Mahmoud AWd"

  onSale:boolean=true ;
  x:string ;

  users:object[]=
  [
    {name:'ahemd' ,age:23 , gender:'male' , dateOffBirth:'1/6/1997' ,salary:2334344 },  
    {name:'mohamed' ,age:23 , gender:'male' , dateOffBirth:'1/6/1997' ,salary:2334344 },  
    {name:'mahmoud' ,age:23 , gender:'male' , dateOffBirth:'1/6/1997' ,salary:2334344 },  
    {name:'taha' ,age:23 , gender:'male' , dateOffBirth:'1/6/1997' ,salary:2334344 },  
    {name:'khaled' ,age:23 , gender:'male' , dateOffBirth:'1/6/1997' ,salary:2334344 },  
    {name:'aly' ,age:23 , gender:'male' , dateOffBirth:'1/6/1997' ,salary:2334344 },  
    {name:'hamza' ,age:23 , gender:'male' , dateOffBirth:'1/6/1997' ,salary:2334344 },  

  ]

  /*
  welcom(event)
  {
    console.log(event.target.value);
    
  }
  */

}