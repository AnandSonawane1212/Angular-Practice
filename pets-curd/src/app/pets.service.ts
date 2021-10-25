import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pets } from './pets';
import { HttpClientModule } from '@angular/common/http'; 


@Injectable({
  providedIn: 'root'
})

export class PetsService {

  private apiUrl='http://localhost:3000/pets';
  constructor(private http:HttpClient) { }

  getPetsList():Observable<any>{
    return this.http.get(`${this.apiUrl}`);
  }
  createPet(pet: Pets) {
    return this.http.post(`${this.apiUrl}`,pet);
   }
}
