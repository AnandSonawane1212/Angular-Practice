import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pets } from '../pets';
import { PetsService } from '../pets.service';

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.css']
})
export class CreatePetComponent implements OnInit {

  pet: Pets = new Pets();
  submitted = false;

  constructor(private petService: PetsService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.pet = new Pets();
  }

  save() {
    var arr:any[] = [];
    arr.push(this.pet.favFoods)
    this.pet.favFoods = arr;
    this.petService
    .createPet(this.pet).subscribe(data => {
      console.log(data)
      this.pet = new Pets();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    console.log(this.pet);
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/pets']);
  }

}
