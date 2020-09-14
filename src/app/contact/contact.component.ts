import { Component, OnInit } from '@angular/core';
import{OurDataService}from '../our-data.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  dataArry=[]

  constructor(_OurDataService:OurDataService){

   this.dataArry= _OurDataService.getEmps()
   }

  ngOnInit(): void {
  }

}
