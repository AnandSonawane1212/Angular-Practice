import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogs!: Observable<Blog[]>;
  commentFlag:boolean = false;
  constructor(private route:ActivatedRoute,private service:BlogService, private router:Router) { }

  ngOnInit(): void {
    // Calling get all request to see newly added / updated data back on ui
    this.reloadData();
  }

  reloadData()
  {
    this.blogs=this.service.getBlogList();
  }
  detailBlog(id:number)
  {
    this.router.navigate(['blog',id]);
  }
  comment(){
    this.commentFlag = true;
  }
  updateBlog(id:number){
    this.router.navigate(['update',id]);
  }
  deleteBlog(id:number){
    this.service.deleteBlog(id).subscribe(
      data=>{
        console.log(data);
        this.reloadData();
      },
      error=>console.log(error));
  }
}
