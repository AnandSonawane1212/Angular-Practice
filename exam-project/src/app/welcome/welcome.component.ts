import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private route:ActivatedRoute,private service:ExamService, private router:Router) { }

  ngOnInit(): void {
  }
  startExam(){
    this.router.navigate(['exam']);
  }
}
