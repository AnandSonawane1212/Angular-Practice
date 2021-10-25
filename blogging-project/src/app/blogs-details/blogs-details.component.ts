import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blogs-details',
  templateUrl: './blogs-details.component.html',
  styleUrls: ['./blogs-details.component.css']
})
export class BlogsDetailsComponent implements OnInit {

  blog!:Blog;
  id!:number;
  comment:any = "Intresting Branch";
  commentFlag = false;
  constructor(private route:ActivatedRoute,private router:Router,private service:BlogService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

    this.service.getBlog(this.id)
    .subscribe(data=>{
      console.log(data)
      this.blog=data;
    },error=>console.log(error));
  }

  addComment(){
    this.commentFlag = true;
  }

  onSubmit(blog:Blog){
    console.log(this.comment)
    blog.comments.push(this.comment);
    this.blog = blog;
    this.updateEmployee()
  }
  list(){
    this.router.navigate(['blogs']);
  }
  updateEmployee(){
    this.service.updateBlog(this.id,this.blog).subscribe(data=>{
      console.log(data);
      this.blog=new Blog();
      this.ngOnInit();
      },
      error=>console.log(error));
      this.commentFlag = false;
  }
}
