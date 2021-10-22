import { Injectable } from '@angular/core';
import  { HttpClient,HttpHeaders} from '@angular/common/http';
import { Photo } from './Photo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  apiUrl: string='https://jsonplaceholder.typicode.com/photos/';
  headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
  httpOption = {
    headers:this.headers
  }
  constructor(private http:HttpClient) { 
  }
  
  getAll():Observable<Photo[]>{
    return this.http.get<Photo[]>(this.apiUrl);
  }
  update(id:number,photo:Photo):Observable<Photo>{
    return this.http.put<Photo>(this.apiUrl+id,JSON.stringify(photo),this.httpOption);
  }
  create(photo:Photo):Observable<any>{
    return this.http.post(this.apiUrl,JSON.stringify(photo),this.httpOption);
  }
  delete(id:number){
    return this.http.delete<Photo>(this.apiUrl+id+this.httpOption);
  }
 
}
