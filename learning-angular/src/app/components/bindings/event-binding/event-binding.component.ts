import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  animal = '🐕';

  onKeyUp(_keyUpEvent: any){

    console.log(_keyUpEvent)
  }

  onClick(){
    alert("Button is Click...");
  }

}
