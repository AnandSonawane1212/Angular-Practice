import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pets } from '../pets';
import { PetsService } from '../pets.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  pets!:Observable<Pets[]>;
  constructor(private service:PetsService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData()
  {
    this.pets=this.service.getPetsList();
  }
}
