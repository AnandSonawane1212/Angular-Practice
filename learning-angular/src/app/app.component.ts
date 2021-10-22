import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 9';
  currentVariableChild = 'Anand Sonawane';
  currentVariableParent = [
    'variable 1','varibale 2'
  ]
  counter:number = 0;
  addNewVariable(newVariable:string){
    this.currentVariableParent.push(newVariable);
  }
}
