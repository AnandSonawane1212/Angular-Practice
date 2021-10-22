import { Component, OnInit } from '@angular/core';
import { Employee } from './Employee';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  countries:any[] = ["India","UAE","USA"];
  emp:Employee = {
    name:'',
    age:"",
    country:[]
  }

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log("Employee :"+this.emp);
  }


}
