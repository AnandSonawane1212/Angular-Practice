import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ExamService } from '../exam.service';
import { ExamQuetions } from '../Questions';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  questions!: Observable<ExamQuetions[]>;

  examFlag = true;
  marksFlag = false;

  constructor(private route:ActivatedRoute,private service:ExamService, private router:Router) { }
  marks:number = 0;
  ngOnInit(): void {
    this.reloadData();
  }
  reloadData()
  {
    this.questions=this.service.getQuestions();
  }
  optionClick(option:string,questions:ExamQuetions){
    if(option == questions.answer){
      this.marks+=1;
    }
  }
  submit(){
    console.log(this.marks)
    this.examFlag = false;
    this.marksFlag = true
  }

}
