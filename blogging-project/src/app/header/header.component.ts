import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  blogs!: Observable<Blog[]>;

  constructor(private route:ActivatedRoute,private service:BlogService, private router:Router) { }

  ngOnInit(): void {
    this.reloadData()
  }
  reloadData()
  {
    this.blogs=this.service.getBlogList();
  }
}
