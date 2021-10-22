import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  msgs:string[] = ["About us","Welcome to About Page"]
  constructor() { }

  ngOnInit(): void {
  }

}
