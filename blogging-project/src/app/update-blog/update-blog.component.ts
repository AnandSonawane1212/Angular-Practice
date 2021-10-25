import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css']
})
export class UpdateBlogComponent implements OnInit {

  id!:number;
  blog!:Blog;
  constructor(private service:BlogService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.blog=new Blog();
    this.id=this.route.snapshot.params['id'];

    this.service.getBlog(this.id).subscribe(data=>
      {
        console.log(data)
        this.blog=data;
      },
      error=>console.log(error));
    

  }
  updateEmployee(){
    this.service.updateBlog(this.id,this.blog).subscribe(data=>{
      console.log(data);
      this.blog=new Blog();
      this.gotoList();
      },
      error=>console.log(error));
  }
  gotoList()
  {
    this.router.navigate(['/blogs']);
    
  }
  onSubmit()
  {
    this.updateEmployee();
  }

}
