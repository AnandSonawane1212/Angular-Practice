import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamComponent } from './exam/exam.component';
import { ReviewAndMarksComponent } from './review-and-marks/review-and-marks.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'welcome', component:WelcomeComponent},
  {path:'exam', component:ExamComponent},
  {path:'reviewandmarks',component:ReviewAndMarksComponent},
  {path:'',redirectTo:'/welcome',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

