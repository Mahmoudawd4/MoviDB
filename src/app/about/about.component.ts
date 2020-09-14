import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  userName:string ="Mahmoud AWd"

  onSale:boolean=true ;
  x:string ;

  /*
  welcom(event)
  {
    console.log(event.target.value);
    
  }
  */

  constructor() { }

  ngOnInit(): void {
  }

}
