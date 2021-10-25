import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePetComponent } from './create-pet/create-pet.component';
import { PetListComponent } from './pet-list/pet-list.component';

const routes: Routes = [
  {path:'pets', component:PetListComponent},
  {path:'add',component:CreatePetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
