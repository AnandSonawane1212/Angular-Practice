import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from './blog';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private apiUrl='http://localhost:3000/blogs';
  constructor(private http:HttpClient) { }

  getBlogList():Observable<any>{
    return this.http.get(`${this.apiUrl}`);
  }
  getBlog(id:number):Observable<any>{
    return this.http.get(`${this.apiUrl}/${id}`)
  }
  updateBlog(id:number,value:any):Observable<Object>{
    return this.http.put(`${this.apiUrl}/${id}`,value);
  }
  createBlog(blog: Blog) {
    return this.http.post(`${this.apiUrl}`,blog);
   }
   deleteBlog(id:number):Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`,{responseType: 'text'});
  }

}
