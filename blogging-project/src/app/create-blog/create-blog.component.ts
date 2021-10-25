import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {

  blog: Blog = new Blog();
  submitted = false;

  constructor(private blogService: BlogService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.blog = new Blog();
  }

  save() {
    this.blogService
    .createBlog(this.blog).subscribe((data: any) => {
      console.log(data)
      this.blog = new Blog();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    console.log(this.blog);
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/blogs']);
  }

}
