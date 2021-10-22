import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {

  birthdate:string ='29-Apr-1980';
  price:number=245;
  message:string="Pipes transform the data format";
  constructor() { }

  ngOnInit(): void {
  }

}