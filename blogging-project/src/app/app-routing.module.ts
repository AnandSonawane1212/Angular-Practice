import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsDetailsComponent } from './blogs-details/blogs-details.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { HeaderComponent } from './header/header.component';
import { UpdateBlogComponent } from './update-blog/update-blog.component';

const routes: Routes = [
  {path:'blogs', component:BlogsComponent},
  {path:'blog/:id', component:BlogsDetailsComponent},
  {path:'header',component:HeaderComponent},
  {path:'contact',component:ContactComponent},
  {path:'create',component:CreateBlogComponent},
  {path:'update/:id',component:UpdateBlogComponent},
  {path:'',redirectTo:'/header',pathMatch:'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
