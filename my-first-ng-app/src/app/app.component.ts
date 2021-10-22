import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-ng-app';
  cars:string[] = [
    'MG Hector','KIA','Maruti Suzuki','TATA','Creta'
  ];
  color:string = 'green';
  size:number = 29;
  show:boolean = false;
  getKey(event:any){
    console.log(event.code);
    
  }
}
