import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-review-and-marks',
  templateUrl: './review-and-marks.component.html',
  styleUrls: ['./review-and-marks.component.css']
})
export class ReviewAndMarksComponent implements OnInit {

  @Input() Result!:number;
  constructor(private route:ActivatedRoute,private service:ExamService, private router:Router) { }

  ngOnInit(): void {
  }
  home(){
    this.router.navigate(['welcome']);
  }

}
