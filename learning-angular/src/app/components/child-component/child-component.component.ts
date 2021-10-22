import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {  Input } from '@angular/core'; // First, import Input

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() childVariableInput:string   = ''; // decorate the property with @Input()
  @Output() childVariableOutput = new EventEmitter<string>();

  

  setParentVariable(value: string) {
    this.childVariableOutput.emit(value);
  }
}
